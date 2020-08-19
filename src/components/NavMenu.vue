<template>
    <transition name="fade">
        <div ref="navMenuRef" v-show="show" v-on:navTogglerClicked="toggleMenu" class="nav-menu__container">
            <div class="nav-menu">
                <NavLink title="About" route="/about" />
                <NavLink title="Request Offer" route="/request-offer" />
                <NavLink title="Portfolio" route="/portfolio" />
            </div>
        </div>
    </transition>
</template>

<script>
    import NavLink from '../components/NavLink'
    import {eventBus} from '../main'

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
        },
        created() {
            eventBus.$on('navTogglerClicked', () => {
                this.show = !this.show
            })
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
            background-image: url('https://media.giphy.com/media/Ll324wCRjsGqX72lsV/source.gif');
            background-repeat: no-repeat;
            background-size: cover;
            background-color: $black;
            z-index: 9999;
            background-position: bottom center;
        }
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: all 0.15s ease-in-out;
    }

    .fade-leave {

    }

    .fade-leave-active {
        opacity: 0;
        transition: opacity 0.15s ease-in-out;
    }
</style>