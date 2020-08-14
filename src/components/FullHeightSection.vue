<template>
    <section class="full-height-section">
        <div class="full-height-section__content">
            <slot />
        </div>
    </section>
</template>

<script>
export default {
    name : 'FullHeightSection',
    props : [
        {
            type: Boolean,
            default: false
        }
    ]
}
</script>

<style lang="scss">
    .full-height-section {
        min-height: 100vh;
        width: 100vw;
        padding: 70px 0;
        display: flex;
        flex-direction: row;
        align-items: center;

        &__content {
            width: 100%;
        }
    }
</style>