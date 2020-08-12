<template>
    <div class="owner-links">
        <a target="_blank" href="#">FACEBOOK</a>
        <a target="_blank" href="#">GITHUB</a>
        <a target="_blank" href="#">LINKEDIN</a>
        <a target="_blank" href="#">EMAIL</a>
    </div>
</template>

<script>
export default {
    name : 'OwnerLinks'
}
</script>

<style lang="scss">
  .owner-links {
    position: fixed;
    right: -160px;
    top: 50%;
    transform: rotateZ(-90deg);
  
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
</style>