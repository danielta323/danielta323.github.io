<template>
  <div id="container">
    <div id="map"></div>
    <div id="popup" class="ol-popup">
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
      <div id="popup-existing" class="hide">
        <div>{{markerName}}</div>
        <div>{{markerLat}}</div>
        <div>{{markerLong}}</div>
        <button @click.stop="deletePoint">刪除標記</button>
      </div>
      <div id="popup-new" class="hide">
        <div><input placeholder="輸入顯示名稱" v-model="markerName" /></div>
        <div>緯度{{markerLat}}</div>
        <div>經度{{markerLong}}</div>
        <button @click.stop="addPoint">新增標記</button>
      </div>
    </div>
    <div class="controll">
      <button @click.stop="clearAll">全部清除</button>
      <button @click.stop="overview">總覽</button>
    </div>
  </div>
</template>

<script>
import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import View from 'ol/View';
import Overlay from 'ol/Overlay';
import {Circle as CircleStyle, Stroke, Style} from 'ol/style';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {easeOut} from 'ol/easing';
import {fromLonLat} from 'ol/proj';
import {getVectorContext} from 'ol/render';
import {unByKey} from 'ol/Observable';
import { localForageService } from '../store/localForageService';
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
      overlay: null,
      duration: 3000,
      markerLong: '',
      markerLat: '',
      markerName: '',
      focusingFeature: null,
      storedFeatures: [],
    }
  },
  computed: {
    popupContainer: function () {
      return document.getElementById('popup');
    },
    popupExisting: function () {
      return document.getElementById('popup-existing');
    },
    popupNew: function () {
      return document.getElementById('popup-new');
    },
    popupCloser: function () {
      return document.getElementById('popup-closer');
    },
  },
  methods: {
    addRandomFeature: function () {
      var x = Math.random() * 360 - 180;
      var y = Math.random() * 180 - 90;
      var geom = new Point(fromLonLat([x, y], 'EPSG:4326'));
      var feature = new Feature(geom);
      this.source.addFeature(feature);
      return feature;
    },
    createNewFeature: function ({uuid, name, lat, long}) {
      var geom = new Point(fromLonLat([long, lat], 'EPSG:4326'));
      var feature = new Feature(geom);
      feature.set('uuid', uuid);
      feature.set('name', name);
      this.source.addFeature(feature);
    },
    flash: function (feature) {
      var start = new Date().getTime();
      var listenerKey = this.tileLayer.on('postrender', (event) => {
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
      });
    },
    initMap: function () {
      this.tileLayer = new TileLayer({
        source: new OSM({
          wrapX: false,
        }),
      });
      this.overlay = new Overlay({
        element: this.popupContainer,
        autoPan: true,
        autoPanAnimation: {
          duration: 250
        }
      });
      this.map = new Map({
        target: 'map',
        layers: [this.tileLayer],
        overlays: [this.overlay],
        view: new View({
          projection: 'EPSG:4326',
          center: [0, 0],
          zoom: 3,
          multiWorld: true,
        })
      });
      this.source = new VectorSource({
        wrapX: false,
      });
      this.vector = new VectorLayer({
        source: this.source,
      });
      this.map.addLayer(this.vector);
      this.map.addOverlay(this.overlay);

      this.storedFeatures.map((feature) => {
        this.createNewFeature(feature);
      });

      this.source.on('addfeature', (e) => {
        this.flash(e.feature);
      });

      this.popupCloser.onclick = this.hidePopup;

      this.map.on('singleclick', (event) => {
        const coordinate = event.coordinate;
        this.markerLat = coordinate[1];
        this.markerLong = coordinate[0];
        this.overlay.setPosition(coordinate);
        if (this.map.hasFeatureAtPixel(event.pixel) === true) {
          // always use 1st of features list...
          this.focusingFeature = this.map.getFeaturesAtPixel(event.pixel)[0];
          this.markerName = this.focusingFeature.get('name');
          this.popupNew.classList.add('hide');
          this.popupExisting.classList.remove('hide');
        } else {
          this.markerName = '';
          this.popupNew.classList.remove('hide');
          this.popupExisting.classList.add('hide');
        }
      });
    },
    clearAll: function () {
      localForageService.setItem('saveFeatureProp', []).then(() => {
        this.storedFeatures = [];
        this.source.clear();
      });
    },
    overview: function () {
      console.log('overview');
    },
    addPoint: function () {
      console.log('addPoint', this.markerName, this.markerLong, this.markerLat);
      const featureProp = {
        uuid: Date.now(),
        name: this.markerName,
        lat: this.markerLat,
        long: this.markerLong,
      };
      this.createNewFeature(featureProp);
      this.saveFeature(featureProp);
      this.hidePopup();
    },
    deletePoint: function () {
      const deletingUuid = this.focusingFeature.get('uuid');
      const deletingIndex = this.storedFeatures.findIndex((feature) => {
        return feature.uuid = deletingUuid;
      });
      if (deletingIndex === -1) return;
      this.storedFeatures.splice(deletingIndex, 1);
      this.source.removeFeature(this.focusingFeature);
      localForageService.setItem('saveFeatureProp', this.storedFeatures).then(() => {
        this.focusingFeature = null;
        this.hidePopup();
      });
    },
    saveFeature: function (featureProp) {
      this.storedFeatures.push(featureProp);
      localForageService.setItem('saveFeatureProp', this.storedFeatures);
    },
    hidePopup: function () {
      this.popupNew.classList.add('hide');
      this.popupExisting.classList.add('hide');
      this.overlay.setPosition(undefined);
      this.popupCloser.blur();
      return false;
    }
  },
  mounted: function () {
    localForageService.getItem('saveFeatureProp').then((props) => {
      console.log('props', props);
      this.storedFeatures = props ? props : [];
      this.initMap();
    });
  }
}
</script>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
  }
  .controll {
    height: 100px;
  }
  #map {
    height: calc(100% - 200px);
  }
  .ol-popup {
    position: absolute;
    background-color: white;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    bottom: 12px;
    left: -50px;
    min-width: 280px;
  }
  .ol-popup:after, .ol-popup:before {
    top: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  .ol-popup:after {
    border-top-color: white;
    border-width: 10px;
    left: 48px;
    margin-left: -10px;
  }
  .ol-popup:before {
    border-top-color: #cccccc;
    border-width: 11px;
    left: 48px;
    margin-left: -11px;
  }
  .ol-popup-closer {
    text-decoration: none;
    position: absolute;
    top: 2px;
    right: 8px;
  }
  .ol-popup-closer:after {
    content: "✖";
  }
  .hide {
    display: none;
  }
</style>
