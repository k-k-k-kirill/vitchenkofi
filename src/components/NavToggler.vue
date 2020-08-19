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
    import {eventBus} from '../main'

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
                eventBus.$emit('navTogglerClicked')
            }
        }
    }
</script>

<style lang="scss">
    $size: 50px;
    $translate: ($size / 2) - 0.5px;

    .cube-container {
        position: fixed !important;
        top: 40px;
        right: 70px;
        display: inline-block;
        width: $size;
        height: $size;
        position: relative;
        perspective: 500px;
        margin: 0 auto;
        z-index: 10000;
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
        background-image: url('https://media.giphy.com/media/l3q2U2tIy0SvF1HSo/source.gif');
        background-color: white;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        border: none;
    }

    #cube .front  { transform: rotateY(   0deg ) translateZ( $translate ); }
    #cube .back   { transform: rotateX( 180deg ) translateZ( $translate ); }
    #cube .right  { transform: rotateY(  90deg ) translateZ( $translate ); }
    #cube .left   { transform: rotateY( -90deg ) translateZ( $translate ); }
    #cube .top    { transform: rotateX(  90deg ) translateZ( $translate ); }
    #cube .bottom { transform: rotateX( -90deg ) translateZ( $translate ); }
</style>