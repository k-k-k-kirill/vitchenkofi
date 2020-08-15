<template>
    <div :class="wrapperclasses">
        <label v-if="label != ''">{{ label }}</label>
        <input :type="type" :value="value" :placeholder="placeholder" />
    </div>
</template>

<script>
    export default {
        name: 'Input',
        props: {
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            wrapperclasses: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                value: '',
            }
        }
    }
</script>

<style lang="scss">
    input[type="text"],
    input[type="email"] {
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