<template>
    <Layout>
        <FullHeightSection>
            <div class="row">
                <div class="col-lg-5 pt-2">
                    <ProjectTeaser classes="d-block mb-4" url="https://www.facebook.com" title="Test project" :skills="skills" />
                    <ProjectTeaser classes="d-block mb-4" url="https://www.facebook.com" title="Test project" :skills="skills" />
                    <ProjectTeaser url="https://www.facebook.com" title="Test project" :skills="skills" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <BigLink route="/request-offer" title="Request offer" />
                </div>
            </div>
        </FullHeightSection>
    </Layout>
</template>

<script>
import Layout from '../components/Layout'
import FullHeightSection from '../components/FullHeightSection'
import ProjectTeaser from '../components/ProjectTeaser'
import BigLink from '../components/BigLink'

export default {
    name : 'Portfolio',
    components: {
        'Layout' : Layout,
        'FullHeightSection' : FullHeightSection,
        'ProjectTeaser' : ProjectTeaser,
        'BigLink' : BigLink
    },
    data() {
        return {
            skills: [
                'Twig',
                'WordPress'
            ]
        }
    }
}
</script>