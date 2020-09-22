<template>
    <div class="loading-screen"></div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style lang="scss">
    .loading-screen {
        content: "";
        width: 100%;
        height: 100%;
        background-image: url('https://media.giphy.com/media/4T1NFafropdQOrBYw6/source.gif');
        position: fixed;
        top: 0;
        left: 0;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
</style>