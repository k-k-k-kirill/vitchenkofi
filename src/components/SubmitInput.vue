<template>
    <div :class="wrapperclasses">
        <label v-if="label != ''">{{ label }}</label>
        <input type="submit" :value="value" />
    </div>
</template>

<script>
    export default {
       name: 'SubmitInput' ,
       props: {
           value: {
               type: String,
               default: 'Submit'
           },
           wrapperclasses: {
               type: String,
               default: ''
           },
           label: {
               type: String,
               default: ''
           }
       }
    }
</script>

<style lang="scss">
    input[type="submit"] {
        background-color: $dark-100;
        border: none;
        padding: 1rem 3rem;
        color: #525252;
        opacity: 0.8;
        transition: all 0.15s ease-in-out;

        &:hover {
            opacity: 1;
        }
    }
</style>