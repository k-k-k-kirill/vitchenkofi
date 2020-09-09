<template>
    <div>
        <textarea :name="name" :class="classes" rows="6" :placeholder="placeholder + (required ? '*' : '')" @input="this.handleChange" :value="visitorData[name]">
        </textarea>
        <span class="error-message" v-if="this.formErrors[name]">{{ this.formErrors[name] }}</span>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Textarea',
        props: [ 'placeholder', 'classes', 'name', 'required' ],
        data() {
            return {
                value: ''
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