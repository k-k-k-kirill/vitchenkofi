<template>
    <div @scroll.passive="onScroll" ref="navMenuRef" class="nav-menu">
        <NavLink title="Portfolio" route="/portfolio" />
        <NavLink title="About" route="/about" />
        <NavLink title="Request offer" route="/request-offer" />
    </div>
</template>

<script>
    // Components
    import NavLink from './NavLink'

    export default {
        name : 'Nav',
        components : {
            'NavLink' : NavLink
        }
    }
</script>

<style lang="scss">

</style>