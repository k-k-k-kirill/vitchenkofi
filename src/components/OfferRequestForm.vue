<template>
    <form>
        <Input placeholder="Name" type="text" wrapperclasses="mb-2" />
        <Input placeholder="Email" type="email" wrapperclasses="mb-2" />
        <Input placeholder="Subject" type="text" wrapperclasses="mb-2" />
        <Textarea placeholder="Message" />
    </form>
</template>

<script>
    import Input from '../components/Input'
    import Textarea from '../components/Textarea'

    export default {
        name: 'OfferRequestForm',
        components: {
            'Input': Input,
            'Textarea': Textarea
        }
    }
</script>

<style lang="scss">
    
</style>