<template>
    <Layout>
        <FullHeightSection>
            <div class="row">
                <div class="col-lg-6 col-xl-4 mb-4 mb-xl-0">
                    <OfferRequestForm />
                </div>
                <div class="col-lg-4 col-xl-4 offset-xl-1">
                    <prismic-rich-text :field="this.asyncRequestOfferTextContent"/>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-11 offset-lg-1">
                    <BigLink title="About" route="/about" />
                </div>
            </div>
        </FullHeightSection>
    </Layout>
</template>

<script>
    import Layout from '../components/Layout'
    import FullHeightSection from '../components/FullHeightSection'
    import OfferRequestForm from '../components/OfferRequestForm'
    import BigLink from '../components/BigLink'
    import { mapGetters } from 'vuex'

    export default {
        name : 'RequestOffer',
        components: {
            'FullHeightSection': FullHeightSection,
            'OfferRequestForm': OfferRequestForm,
            'Layout': Layout,
            'BigLink': BigLink
        },
        computed: {
            ...mapGetters([
                'asyncRequestOfferTextContent'
            ])
        }
    }
</script>