<template>
    <div v-show="show" v-on:navTogglerClicked="toggleMenu" class="nav-menu__container">
        <div class="nav-menu">
            <NavLink title="About" route="/about" />
            <NavLink title="Request Offer" route="/request-offer" />
            <NavLink title="Portfolio" route="/portfolio" />
        </div>
    </div>
</template>

<script>
    import NavLink from '../components/NavLink'

    export default {
        name: 'NavMenu',
        data() {
            return {
                show: false
            }
        },
        components: {
            'NavLink': NavLink
        },
        methods: {
            toggleMenu: function () {
                this.show = !this.show
            }
        }
    }
</script>

<style lang="scss">
    .nav-menu {
        &__container {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url('https://media.giphy.com/media/LT70apKAsQRcC8InFs/source.gif');
            background-repeat: no-repeat;
            background-size: cover;
            z-index: 9999;
            background-position: center center;
        }
    }
</style>