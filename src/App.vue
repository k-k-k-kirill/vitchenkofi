<template>
  <div id="app" ref="appRef">
    <router-view></router-view>
  </div>
</template>

<script>
  import WAVES from "vanta/dist/vanta.waves.min"; // eslint-disable-line
  import * as THREE from 'three'
  import { mapMutations } from 'vuex';

  export default {
    name: "App",
    mounted() {
        this.$prismic.client
          .query([
            this.$prismic.Predicates.any("document.type", ["project", "owner_link", "homepage", "request_offer_page", "about_page"])
          ])
          .then((response) => {
            this.setProjects(response.results.filter((result) => {
              return result.type == 'project'
            }));

            this.setOwnerLinks(response.results.filter((result) => {
              return result.type == 'owner_link'
            }));

            this.setOwnerImageUrl(response.results.filter((result) => {
              return result.type == "homepage"
            })[0].data.owner_image.url)

            this.setRequestOfferTextContent(response.results.filter((result) => {
              return result.type == "request_offer_page"
            })[0].data.content)

            this.setFormThankYouMessage(response.results.filter((result) => {
              return result.type == "request_offer_page"
            })[0].data.form_success_message[0].text)

            this.setAboutLeftColumnContent(response.results.filter((result) => {
              return result.type == "about_page"
            })[0].data.left_column_content)

            this.setAboutSkills(response.results.filter((result) => {
              return result.type == "about_page"
            })[0].data.skills)

            this.setAboutContactDetails(response.results.filter((result) => {
              return result.type == "about_page"
            })[0].data.contact_details)
          });

      let appRef = this.$refs.appRef;

      window.VANTA.WAVES({
        el: appRef,
        mouseControls: true,
        touchControls: true,
        scale: 3.0,
        scaleMobile: 3.0,
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
        'setProjects',
        'setOwnerLinks',
        'setOwnerImageUrl',
        'setRequestOfferTextContent',
        'setFormThankYouMessage',
        'setAboutLeftColumnContent',
        'setAboutSkills',
        'setAboutContactDetails'
      ])
    }
  };
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    z-index: 9999;
  }

  @import "./assets/styles/main.scss";
</style>
