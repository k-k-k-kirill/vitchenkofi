<template>
    <Layout>
        <FullHeightSection>
            <div class="row">
                <div class="col-lg-4">
                    <OfferRequestForm />
                </div>
            </div>
        </FullHeightSection>
    </Layout>
</template>

<script>
    import Layout from '../components/Layout'
    import FullHeightSection from '../components/FullHeightSection'
    import OfferRequestForm from '../components/OfferRequestForm'

    export default {
        name : 'RequestOffer',
        components: {
            'FullHeightSection': FullHeightSection,
            'OfferRequestForm': OfferRequestForm,
            'Layout': Layout
        }
    }
</script>