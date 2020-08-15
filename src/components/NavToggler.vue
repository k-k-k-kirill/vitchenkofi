<template>
    <div @click="onClick" class="cube-container" :class="{ active: isActive }">
        <div id="cube">
            <figure class="face front"></figure>
            <figure class="face back"></figure>
            <figure class="face left"></figure>
            <figure class="face right"></figure>
            <figure class="face top"></figure>
            <figure class="face bottom"></figure>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavToggler',
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            onClick: function () {
                this.isActive = !this.isActive
            }
        }
    }
</script>

<style lang="scss">
    .cube-container {
        position: fixed !important;
        top: 40px;
        right: 65px;
        display: inline-block;
        width: 70px;
        height: 70px;
        position: relative;
        perspective: 500px;
        margin: 0 auto;

        &.active {
            #cube figure {
                background-image: url('https://media.giphy.com/media/fwzTXbxNVu8vz3nhag/source.gif');
            }
        }
    }
    #cube {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
        transform: translateZ( -100px ) rotateZ(45deg) rotateX(45deg);
        animation: spin 15s infinite linear;

        &:hover {
            cursor: pointer;
            animation-play-state: paused;
        }
    }
    @keyframes spin {
        0% { transform: translateZ( -100px ) rotateY(360deg) rotateZ(0deg) rotateX(45deg) }
        50% { transform: translateZ( -100px ) rotateY(180deg) rotateZ(180deg) rotateX(45deg) }
        100% { transform: translateZ( -100px ) rotateY(0deg) rotateZ(360deg) rotateX(45deg) }
    }
    #cube figure {
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        font-weight: bold;
        text-align: center;
        backface-visibility: hidden;
        content: "";
        background-image: url('https://media.giphy.com/media/tZOzL8Q6TnFEuojLkU/source.gif');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    #cube .front  { transform: rotateY(   0deg ) translateZ( 35px ); }
    #cube .back   { transform: rotateX( 180deg ) translateZ( 35px ); }
    #cube .right  { transform: rotateY(  90deg ) translateZ( 35px ); }
    #cube .left   { transform: rotateY( -90deg ) translateZ( 35px ); }
    #cube .top    { transform: rotateX(  90deg ) translateZ( 35px ); }
    #cube .bottom { transform: rotateX( -90deg ) translateZ( 35px ); }
</style>