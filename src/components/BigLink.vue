<template>
    <div class="big-link__container">
    <router-link :to="route"><h2 class="d-block mt-7 portfolio-link big-link">{{ title }}</h2></router-link>
        <div class="icon-big">
            <svg width="61" class="big-link__icon" height="27" viewBox="0 0 61 27" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M61 12.9277L43.7462 0L39.4334 2.98664L49.3246 10.3739H0V15.1809H49.3246L39.4334 23.3929L43.7462 27L61 12.9277Z" fill="black"/>
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="61" height="27">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M61 12.9277L43.7462 0L39.4334 2.98664L49.3246 10.3739H0V15.1809H49.3246L39.4334 23.3929L43.7462 27L61 12.9277Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                <rect width="61" height="27" rx="4" fill="#ffffff"/>
                </g>
            </svg>
        </div>  
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

        &__icon {
            .big-link__icon {
                transition: all 0.15s ease-in-out !important;
            }
        }

        &__container {
            &:hover {
                .big-link__icon {
                    rect {
                        fill: $brick;
                    }

                    transform: translateX(200%);
                }
            }
        }
    }
</style>