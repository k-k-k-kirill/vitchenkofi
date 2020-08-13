<template>
    <Layout>
        <FullHeightSection>
            <div class="row">
                <div class="col-lg-3">
                    <p class="lead mb-3">
                        Hi, I’m Kirill, Interactive Developer based in Paris and currently working as a freelance.
                    </p>
                    <p class="mb-2">
                        I offer my expertise to agencies and creative teams.
                    </p>
                    <p class="mb-2">
                        After several years as Technical Director and Developer I craved to reconnect with craftsmanship, to make beautiful objects carefully designed, carefully developed.
                    </p>
                    <p class="mb-2">
                        I’m a developer with taste for design, animation and big typography :)
                    </p>

                    <p class="lead">
                        Feel free to mail me for any digital project or information.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
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

    export default {
        name : 'About',
        components: {
            'Layout': Layout,
            'FullHeightSection': FullHeightSection,
            'BigLink': BigLink
        }
    }
</script>