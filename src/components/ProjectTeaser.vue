<template>
    <a ref="projectTeaserRef" :href="url" class="teaser-vit-project" :class="classes" data-img="https://media.giphy.com/media/T8Dhl1KPyzRqU/source.gif">
        <img class="d-block d-md-none mb-2" src="https://media.giphy.com/media/T8Dhl1KPyzRqU/source.gif" />
        <h2 class="teaser-vit-project__title">{{ title }}</h2>
        <div ref="skillSetRef" class="teaser-vit-project__skillset text-brick">
            {{ skillString }}
        </div>
        <div class="text-brick d-block d-md-none">
            {{ skillString }}
        </div>
    </a>
</template>

<script>
    import HoverTypeRevealEffect from '../assets/scripts/animations/HoverTypeRevealEffect'
    import HoverProjectImageRevealEffect from '../assets/scripts/animations/HoverProjectImageRevealEffect'

    export default {
        name: 'ProjectTeaser',
        props: [ 'skills', 'title', 'url', 'classes' ],
        computed: {
            skillString: function () {
                return this.$props.skills.join('')
            }
        },
        mounted() {
            let { skillSetRef } = this.$refs
            new HoverTypeRevealEffect(skillSetRef)

            let { projectTeaserRef } = this.$refs
            new HoverProjectImageRevealEffect(projectTeaserRef)
        }
    }
</script>

<style lang="scss">
    .teaser-vit-project {
        &__title {
            position: relative;
            z-index: 1;
        }

        &__skillset {
            position: relative;
            transition: all 0.15s ease-in-out;
            height: 0;
            overflow: hidden;
            z-index: 1;
        }

        &:hover {
            text-decoration: none;
            color: $cream;

            .teaser-vit-project__skillset {
                height: 50px;
            }
        }
    }

    .hover-reveal {
        z-index: 0;
    }
</style>