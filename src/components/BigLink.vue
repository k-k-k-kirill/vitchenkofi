<template>
    <div class="big-link__container">
        <router-link :to="route"><h2 class="d-inline-block mt-7 portfolio-link big-link">{{ title }}</h2></router-link>
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

        &__container {
            &:hover {
                .portfolio-link {
                    &::after,
                    &::before {
                        transform: translateX(0) translateY(10%);
                        opacity: 1;
                        color: white;
                    }
                }
            }
        }
    }

    .portfolio-link {
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
    }
</style>