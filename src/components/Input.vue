<template>
    <div :class="wrapperclasses">
        <label v-if="label != ''">{{ label }}</label>
        <input :name="name" :type="type" :value="visitorData[name]" @input="this.handleChange" :placeholder="placeholder + (required ? '*' : '')" />
        <span class="error-message" v-if="this.formErrors[name]">{{ this.formErrors[name] }}</span>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Input',
        props: {
            type: {
                type: String,
                default: 'text'
            },
            name: {
                type: String,
                default: '',
                required: true
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
            },
            required: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            ...mapGetters([
                'visitorData',
                'formErrors'
            ])
        },
        methods: {
            handleChange(e) {
                this.$store.commit('setVisitorDataValue', { 
                    key: this.name,
                    value: e.target.value
                 })
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

    .error-message {
        display: block;
        margin-top: 0.5rem;
        color: white;
    }
</style>