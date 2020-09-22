<template>
    <a v-if="this.$store.state.asyncDataReady" ref="projectTeaserRef" :href="url" target="_blank" class="teaser-vit-project" :class="classes" :data-img="image_url">
        <img class="d-block d-xl-none mb-2 mobile-gif" :src="image_url" />
        <h2 class="teaser-vit-project__title">{{ title }}</h2>
        <div ref="skillSetRef" class="teaser-vit-project__skillset text-brick">
            {{ skillString }}
        </div>
        <div class="text-brick d-block d-xl-none">
            {{ skillString }}
        </div>
    </a>
</template>

<script>
    import HoverTypeRevealEffect from '../assets/scripts/animations/HoverTypeRevealEffect'
    import HoverProjectImageRevealEffect from '../assets/scripts/animations/HoverProjectImageRevealEffect'

    export default {
        name: 'ProjectTeaser',
        props: [ 'skills', 'title', 'url', 'classes', 'image_url' ],
        computed: {
            skillString: function () {
                let skillSlugs = this.$props.skills.map((skill) => {
                    return skill.skill[0].text
                })
                return skillSlugs.join(' ')
            }
        },
        mounted() {
            if ( this.$store.state.asyncDataReady ) {
                let { skillSetRef } = this.$refs
                new HoverTypeRevealEffect(skillSetRef)

                let { projectTeaserRef } = this.$refs
                new HoverProjectImageRevealEffect(projectTeaserRef)
            }
        },
        updated() {
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
                @include media-breakpoint-up(md) {
                    height: 50px;
                }
            }
        }
    }

    .hover-reveal {
        z-index: 0;
    }

    .mobile-gif {
        width: 100%;
        height: auto;
    }
</style>