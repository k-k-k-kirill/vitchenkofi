<template>
  <div id="app" ref="appRef">
    <FrontPage />
  </div>
</template>

<script>
import * as THREE from './assets/scripts/background/three.r95.min' // eslint-disable-line

// Views
import FrontPage from './views/frontPage'

export default {
  name: 'App',
  components: {
    'FrontPage' : FrontPage
  },
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

<style lang="scss">
  #app {
    width: 100vw;
    height: 100vh;
  }

  @import './assets/styles/main.scss';
</style>
