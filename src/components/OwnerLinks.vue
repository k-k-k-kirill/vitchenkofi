<template>
  <div class="owner-links" :class="{ owner_links__static : isStatic, hide_on_mobile: hideOnMobile }">
    <a target="_blank" href="#">FACEBOOK</a>
    <a target="_blank" href="#">GITHUB</a>
    <a target="_blank" href="#">LINKEDIN</a>
    <a target="_blank" href="#">EMAIL</a>
  </div>
</template>

<script>
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

  @include media-breakpoint-up(md) {
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
}
</style>