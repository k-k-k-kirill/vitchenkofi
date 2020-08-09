<template>
    <a ref="ownerPhotoRevealRef" class="js-owner-photo-on-hover block__title" data-img="./mugshot.png">
        <slot />
    </a>
</template>

<script>
    // Animations
    import OwnerPhotoEffect from '../assets/scripts/animations/OwnerPhotoEffect'

    export default {
        name: 'OwnerPhotoReveal',
        props: ['imageUrl'],
        mounted() {
            let ownerPhotoRevealRef = this.$refs.ownerPhotoRevealRef
            new OwnerPhotoEffect(ownerPhotoRevealRef)
        }
    }
</script>

<style lang="scss">
    .js-owner-photo {
        transition: height 0.2s ease-in-out;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 0;
        visibility: hidden;
        height: 0;
    }

    .hover-reveal {
        position: fixed;
        width: 200px;
        height: 150px;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0;

        &-project {
            width: 500px;
            height: 300px;
            z-index: -1;
        }

        &-filter {
            width: 500px;
            height: 300px;
            z-index: 9999;
        }

        &__overlay {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

    }

    .hover-reveal__inner,
    .hover-reveal__img {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .hover-reveal__deco {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #181314;
    }

    .hover-reveal__img {
        background-size: cover;
        background-position: 50% 50%;
    }

    .block {
        text-transform: lowercase;
        padding: 0 4rem 20vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .block__title {
        position: relative;
        margin: 0 0 1.5rem 0;
        padding: 0.5rem 0;
        cursor: pointer;

        &:hover {
            color: $white;
        }
    }

    .block__title span,
    .block__link span,
    .content__text-link span {
        position: relative;
        display: inline-block;
        white-space: pre;
    }

    .projects-archive-link {
        font-weight: 400;
        transition: all 0.15s ease-in-out;

        &:hover {
            text-decoration: none;
            color: $cream;
        }
    }

    .with-stagger-effect {
        span {
            transition: all 0.15s ease-out;
            position: relative;
            display: inline-block;
            white-space: pre;
            margin-right: 2px;
        }
        
        &:hover,
        &:active,
        &:focus,
        &.active {
            text-decoration: none;
            color: $cream;
            width: 140%;
        
            span:not(:last-child) {
            transition: none;
            margin-right: 10px;
            }
        }
    }
</style>