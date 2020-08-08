<template>
  <div id="app" ref="appRef">
  </div>
</template>

<script>
import * as THREE from './assets/scripts/three.r95.min' // eslint-disable-line

export default {
  name: 'App',
  mounted() {
    let appRef = this.$refs.appRef
    window.VANTA.WAVES({
      el: appRef,
      mouseControls: true,
      touchControls: true,
      scale: 1.00,
      scaleMobile: 1.00,
      THREE: THREE,
      color: 0x0,
      shininess: 12,
      waveSpeed: 0.25,
      zoom: 0.75
    })
  }
}
</script>

<style>
  #app {
    width: 100vw;
    height: 100vh;
  }
</style>
