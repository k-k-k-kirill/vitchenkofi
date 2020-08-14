<template>
    <textarea rows="6" :placeholder="placeholder" :value="value">
    </textarea>
</template>

<script>
    export default {
        name: 'Textarea',
        props: [ 'placeholder' ],
        data() {
            return {
                value: ''
            }
        }
    }
</script>

<style lang="scss">
    textarea {
        width: 100%;
        border-radius: 0;
        border: none;
        padding: 1rem;
        background-color: $dark-100;
        opacity: 0.5;
        color: $white;
        transition: all 0.15s ease-in-out;

        &:focus {
            outline: none;
        }

        &:hover,
        &:active,
        &:focus {
            opacity: 0.7;
        }
    }
</style>