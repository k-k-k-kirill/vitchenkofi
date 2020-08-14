<template>
    <form>
        <Input placeholder="Name" type="text" wrapperclasses="mb-2" />
        <Input placeholder="Email" type="email" wrapperclasses="mb-2" />
        <Input placeholder="Subject" type="text" wrapperclasses="mb-2" />
        <Textarea placeholder="Message" classes="mb-2 d-block" />
        <SubmitInput wrapperclasses="text-right" value="Request" />
    </form>
</template>

<script>
    import Input from '../components/Input'
    import Textarea from '../components/Textarea'
    import SubmitInput from '../components/SubmitInput'

    export default {
        name: 'OfferRequestForm',
        components: {
            'Input': Input,
            'Textarea': Textarea,
            'SubmitInput': SubmitInput
        }
    }
</script>

<style lang="scss">

</style>