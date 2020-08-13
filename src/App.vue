<template>
  <div id="app" ref="appRef">
    <router-view></router-view>
  </div>
</template>

<script>
import WAVES from './assets/scripts/background/vanta.waves.min.js' // eslint-disable-line
import * as THREE from './assets/scripts/background/three.r95.min'

export default {
  name: 'App',
  mounted() {
    let appRef = this.$refs.appRef
    window.VANTA.WAVES({
      el: appRef,
      mouseControls: true,
      touchControls: true,
      scale: 3.00,
      scaleMobile: 1.00,
      THREE: THREE,
      color: 0x0,
      shininess: 12,
      waveSpeed: 0.25,
      zoom: 0.75
    })

    console.log()
  },
  updated() {
    window.VANTA.current.resize()
  }
}
</script>

<style lang="scss">
  #app {
    width: 100vw;
    min-height: 100%;
    z-index: 9999;
  }

  @import './assets/styles/main.scss';
</style>
