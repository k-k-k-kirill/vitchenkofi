<template>
    <section class="full-height-section">
        <slot />
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
        height: 100vh;
        width: 100vw;
        padding: 100px 0;
    }
</style>