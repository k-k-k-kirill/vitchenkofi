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

// Animations
import navReposition from '../assets/scripts/animations/NavReposition'

export default {
    name : 'Nav',
    components : {
        'NavLink' : NavLink
    }, 
    mounted() {
        let { navMenuRef } = this.$refs
        navReposition(navMenuRef)
    },
    methods: {
        onScroll : function () {
            console.log('console loh')
        }
    }
}
</script>

<style lang="scss">

</style>