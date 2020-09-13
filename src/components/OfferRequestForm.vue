<template>
    <div>
        <div v-if="submitted">
            <h4>{{ this.$store.state.form_thank_you_message }}</h4>
        </div>
        <form v-else @submit.prevent="handleSubmit">
            <Input name="name" placeholder="Name" type="text" wrapperclasses="mb-2" />
            <Input name="email" placeholder="Email" type="email" wrapperclasses="mb-2" :required="true" />
            <Input name="subject" placeholder="Subject" type="text" wrapperclasses="mb-2" />
            <Textarea name="message" placeholder="Message" classes="mb-2 d-block" :required="true" />
            <SubmitInput wrapperclasses="text-right" value="Request" />
        </form>
    </div>
</template>

<script>
    import Input from '../components/Input'
    import Textarea from '../components/Textarea'
    import SubmitInput from '../components/SubmitInput'
    import axios from 'axios'

    export default {
        name: 'OfferRequestForm',
        components: {
            'Input': Input,
            'Textarea': Textarea,
            'SubmitInput': SubmitInput
        },
        data() {
            return {
                submitted: false
            }
        },
        methods: {
            validateForm() {
                let { visitor } = this.$store.state
                let filterPass = true

                this.$store.commit('clearFormErrors')

                if (visitor.email == "") {
                    this.$store.commit('setFormErrorValue', {
                        key: 'email',
                        value: "Please, provide your e-mail address, so that I can get in touch with you."
                    })
                    filterPass = false
                }

                if ( visitor.message == "" ) {
                    this.$store.commit('setFormErrorValue', {
                        key: 'message',
                        value: 'Please, describe your request to me.'
                    })
                    filterPass = false
                }

                return filterPass
            },
            handleSubmit() {
                if ( this.validateForm() ) {
                    axios.post('https://vitchenkofi.herokuapp.com/mailer', this.$store.state.visitor).then(() => {
                        this.submitted = true
                    })
                }
            }
        }
    }
</script>

<style lang="scss">

</style>