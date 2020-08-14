<template>
    <div class="big-link__container">
        <h2 class="d-inline-block mt-7 big-link portfolio-link"><router-link class="" :to="route">{{ title }}</router-link></h2>
        <div class="portfolio-link__surprise"></div>
    </div>
</template>

<script>
    export default {
        name: 'BigLink',
        props: [ 'title', 'route' ]
    }
</script>

<style lang="scss">
    .big-link {
        letter-spacing: 3px;
        font-weight: normal;
        position: relative;
    }

    .portfolio-link {
        position: relative;
        z-index: 9999;

        &__surprise {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: black;
            opacity: 0;
            pointer-events: none;
            z-index: 8000;
            transition: all 0.15s ease-in-out;
        }

        &::before {
            display: inline-block;
            content: "< ";
            transform: translateX(100%);
            opacity: 0;
            margin-right: 1rem;
            transition: all 0.15s ease-in-out;
        }

        &::after {
            display: inline-block;
            content: "/>";
            transform: translateX(-100%) translateY(10%);
            margin-left: 1rem;
            margin-top: 1rem;
            opacity: 0;
            transition: all 0.15s ease-in-out;
        }

        &:hover {
            z-index: 9999;

            & + div {
                opacity: 1 !important;
            }

            &::after,
            &::before {
                transform: translateX(0) translateY(10%);
                opacity: 1;
                color: white;
            }
        }
    }
</style>