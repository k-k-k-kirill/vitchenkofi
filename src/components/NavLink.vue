<template>
    <router-link class="navigation-link" ref="linkRef" :to="route">
        {{ title }}
    </router-link>
</template>

<script>
export default {
    name : 'NavLink',
    props: [ 'title', 'route' ]
}
</script>

<style lang="scss">
    .navigation-link {
        display: block;
        transition: all 0.15s ease-in-out;
  
        &:hover,
        &:focus,
        &:active,
        &.active {
            text-decoration: none;
            color: $brick;
        }
    }
</style>