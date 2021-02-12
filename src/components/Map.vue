<template>
  <div id="map" class="map"></div>
</template>

<script>
import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import View from 'ol/View';
import {Circle as CircleStyle, Stroke, Style} from 'ol/style';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {easeOut} from 'ol/easing';
import {fromLonLat} from 'ol/proj';
import {getVectorContext} from 'ol/render';
import {unByKey} from 'ol/Observable';
export default {
  name: 'Map',
  props: {
    msg: String
  },
  data: function () {
    return {
      map: null,
      tileLayer: null,
      source: null,
      vector: null,
      duration: 3000,
    }
  },
  computed: {
  },
  methods: {
    // renderCursor: function (event) {
    //   const {clientX} = event;
    //   const {left} = this.mapDomElement.getBoundingClientRect();
    //   console.log(clientX, left);
    //   console.log(this.leftPosition);
    //   this.leftPosition = ((clientX - left) / this.mapDomElement.clientWidth) * 100;
    // },
    // resetCursor: function () {
    //   console.log('resetCursor');
    //   this.leftPosition = 10;
    // },
    addRandomFeature: function () {
      var x = Math.random() * 360 - 180;
      var y = Math.random() * 180 - 90;
      var geom = new Point(fromLonLat([x, y]));
      var feature = new Feature(geom);
      this.source.addFeature(feature);
    },
    flash: function (feature) {
      var start = new Date().getTime();
      var listenerKey = this.tileLayer.on('postrender', animate);

      function animate(event) {
        var vectorContext = getVectorContext(event);
        var frameState = event.frameState;
        var flashGeom = feature.getGeometry().clone();
        var elapsed = frameState.time - start;
        var elapsedRatio = elapsed / this.duration;
        // radius will be 5 at start and 30 at end.
        var radius = easeOut(elapsedRatio) * 25 + 5;
        var opacity = easeOut(1 - elapsedRatio);

        var style = new Style({
          image: new CircleStyle({
            radius: radius,
            stroke: new Stroke({
              color: 'rgba(255, 0, 0, ' + opacity + ')',
              width: 0.25 + opacity,
            }),
          }),
        });

        vectorContext.setStyle(style);
        vectorContext.drawGeometry(flashGeom);
        if (elapsed > this.duration) {
          unByKey(listenerKey);
          return;
        }
        // tell OpenLayers to continue postrender animation
        this.map.render();
      }
    },
    initMap: function () {
      console.trace();
      this.map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: [0, 0],
          zoom: 0
        })
      });
      this.tileLayer = new TileLayer({
        source: new OSM({
          wrapX: false,
        }),
      });
      this.source = new VectorSource({
        wrapX: false,
      });
      this.vector = new VectorLayer({
        source: this.source,
      });
      this.map.addLayer(this.vector);

      this.source.on('addfeature', (e) => {
        this.flash(e.feature);
      });

      window.setInterval(this.addRandomFeature, 1000);

    }
  },
  mounted: function () {
    this.map = this.map ? this.map : this.initMap();
  }
}
</script>

<style scoped>
  #map {
    width: 100%;
    height: 300px;
  }
</style>
