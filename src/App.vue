<template>
  <div id="app" ref="appRef">
    <router-view></router-view>
  </div>
</template>

<script>
  import WAVES from "./assets/scripts/background/vanta.waves.min.js"; // eslint-disable-line
  import * as THREE from "./assets/scripts/background/three.r95.min";
  import { mapMutations } from 'vuex';

  export default {
    name: "App",
    mounted() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "project"))
        .then((response) => {
          this.setProjects(response.results);
        });

      let appRef = this.$refs.appRef;
      window.VANTA.WAVES({
        el: appRef,
        mouseControls: true,
        touchControls: true,
        scale: 3.0,
        scaleMobile: 1.0,
        THREE: THREE,
        color: 0x0,
        shininess: 12,
        waveSpeed: 0.25,
        zoom: 0.75,
      });
    },
    updated() {
      window.VANTA.current.resize();
    },
    methods: {
      ...mapMutations([
        'setProjects'
      ])
    }
  };
</script>

<style lang="scss">
  #app {
    width: 100vw;
    min-height: 100%;
    z-index: 9999;
  }

  @import "./assets/styles/main.scss";
</style>
