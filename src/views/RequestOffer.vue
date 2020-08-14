<template>
    <Layout>
        <FullHeightSection>
            <div class="row">
                <div class="col-lg-4">
                    <OfferRequestForm />
                </div>
                <div class="col-lg-4 offset-lg-1">
                    <p class="lead mb-2">
                        Here you can request an offer from me by filling the form on the left. Please, note that I don't do graphic design, however, can recommend some of my partners.
                    </p>

                    <p class="lead">
                        By the way, the form has a secret. Will you be the one to find it?
                    </p>
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