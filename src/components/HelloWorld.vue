<template>
  <div id="hello" class="hello">
    <div @mousemove="renderCursor" class="container"
      @mouseout="resetCursor"
    >
      <div id="line"
        v-bind:style="{  left: leftPosition + '%' }"
      >
      </div>
      <div class="flag"
        v-bind:style="{  left: leftPosition + '%' }"
      >{{leftPosition}}%</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      leftPosition: 10
    }
  },
  computed: {
    helloDomElement: () => {
      return document.getElementById('hello');
    }
  },
  methods: {
    renderCursor (event) {
      const {clientX} = event;
      const {left} = this.helloDomElement.getBoundingClientRect();
      this.leftPosition = ((clientX - left) / this.helloDomElement.clientWidth) * 100;
    },
    resetCursor() {
      this.leftPosition = 10;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
  width: 100%;
  height: 100%;
}
#line {
  width: 1px;
  height: 100px;
  position: absolute;
  left: 10%;
  background-color: red;
}
.flag {
  position: absolute;
  top: 5px;
}
</style>
