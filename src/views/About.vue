<template>
    <Layout>
        <FullHeightSection>
            <div class="row">
                <div class="col-lg-3">
                    <p class="lead mb-3">
                        Hi, I’m Kirill, Interactive Developer based in Paris and currently working as a freelance.
                    </p>

                    <p class="mb-2">
                        After several years as Technical Director and Developer I craved to reconnect with craftsmanship, to make beautiful objects carefully designed, carefully developed.
                    </p>

                    <p class="lead">
                        Feel free to mail me for any digital project or information.
                    </p>
                </div>
                <div class="col-lg-3 offset-lg-5">
                    <div class="mb-4">
                        <h3 class="mb-1">Skills</h3>
                        <p class="mb-0 smaller">React</p>
                        <p class="mb-0 smaller">Angular</p>
                        <p class="mb-0 smaller">WordPress</p>
                        <p class="mb-0 smaller">Css</p>
                        <p class="mb-0 smaller">Html</p>
                    </div>

                    <div>
                        <h3 class="mb-1">Contact details</h3>
                        <p class="mb-0 smaller">
                            Van Holtz Co <br>
                            Lead Front-end Developer:<br>
                            Eric Van Holtz<br>
                            Lead Back-end Developer:<br>
                            Alex Van Holtz<br>
                        </p>
                    </div>
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