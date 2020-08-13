<template>
    <router-link :to="route"><h2 class="d-block mt-7 portfolio-link big-link">{{ title }}</h2></router-link>
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
    }
</style>