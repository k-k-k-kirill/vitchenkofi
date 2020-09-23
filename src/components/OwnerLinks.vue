<template>
  <div class="owner-links" :class="{ owner_links__static : isStatic, hide_on_mobile: hideOnMobile }">
    <a class="text-uppercase" v-for="link in this.asyncOwnerLinks" :key="link.id" target="_blank" :href="link.data.link.url">{{ link.data.label[0].text }}</a>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "OwnerLinks",
    props: {
      isStatic: {
        type: Boolean,
        default: false
      },
      hideOnMobile: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapGetters([
        'asyncOwnerLinks'
      ])
    }
  };
</script>

<style lang="scss">
.owner-links {
  @include media-breakpoint-up(md) {
    position: fixed;
    right: -160px;
    top: 50%;
    transform: rotateZ(-90deg);
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  a {
    margin-right: 2rem;
    transition: all 0.15s ease-in-out;

    &:hover,
    &:focus,
    &:active,
    &.active {
      text-decoration: none;
      color: $brick;
    }
  }
}

.hide_on_mobile {
  display: none;

  @include media-breakpoint-up(lg) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}

.owner_links__static {
  position: static;
  transform: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1rem;

  @include media-breakpoint-up(md) {
    flex-direction: row;
  }
}
</style>