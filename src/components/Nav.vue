<template>
    <div>
        <NavLink title="Portfolio" route="/portfolio" />
        <NavLink title="About" route="/about" />
        <NavLink title="Request offer" route="/request-offer" />
    </div>
</template>

<script>
import NavLink from './NavLink'

export default {
    name : 'Nav',
    components : {
        'NavLink' : NavLink
    }
}
</script>