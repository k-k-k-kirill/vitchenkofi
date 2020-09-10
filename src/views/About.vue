<template>
    <Layout>
        <FullHeightSection>
            <div class="row">
                <div class="col-lg-3">
                    <prismic-rich-text :field="aboutLeftColumnContent"/>
                </div>
                <div class="col-lg-3 offset-lg-5">
                    <div class="mb-4">
                        <h3 class="mb-1">Skills</h3>
                        <div class="smaller">
                            <prismic-rich-text :field="aboutSkills" />
                        </div>
                    </div>

                    <div>
                        <h3 class="mb-1">Contact details</h3>
                        <p class="mb-0 smaller">
                            <prismic-rich-text :field="aboutContactDetails" />
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-11 offset-lg-1">
                    <BigLink title="Request offer" route="/portfolio" />
                </div>
            </div>
        </FullHeightSection>
    </Layout>
</template>

<script>
    import Layout from '../components/Layout'
    import FullHeightSection from '../components/FullHeightSection'
    import BigLink from '../components/BigLink'
    import { mapGetters } from 'vuex'

    export default {
        name : 'About',
        components: {
            'Layout': Layout,
            'FullHeightSection': FullHeightSection,
            'BigLink': BigLink
        },
        computed: {
            ...mapGetters([
                'aboutLeftColumnContent',
                'aboutSkills',
                'aboutContactDetails'
            ])
        }
    }
</script>