<template>
    <transition name="fade">
        <div v-show="show" v-on:navTogglerClicked="toggleMenu" class="nav-menu__container px-3 px-md-0">
            <div>
                <div class="nav-menu mb-3">
                    <NavLink title="About" route="/about" />
                    <NavLink title="Request Offer" route="/request-offer" />
                    <NavLink title="Portfolio" route="/portfolio" />
                </div>
                <div>
                    <OwnerLinks :isStatic="true" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import NavLink from '../components/NavLink'
    import OwnerLinks from '../components/OwnerLinks'
    import {eventBus} from '../main'

    export default {
        name: 'NavMenu',
        data() {
            return {
                show: false
            }
        },
        components: {
            'NavLink': NavLink,
            'OwnerLinks': OwnerLinks
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
            flex-direction: column;
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

    .fade-leave-active {
        opacity: 0;
        transition: opacity 0.15s ease-in-out;
    }
</style>