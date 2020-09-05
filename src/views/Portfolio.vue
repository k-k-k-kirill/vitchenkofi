<template>
    <Layout>
        <FullHeightSection>
            <div class="row">
                <div class="col-lg-5 pt-2">
                    <ProjectTeaser v-for="project in this.asyncProjects" :key="project.id" classes="d-block mb-4" :url="project.data.project_url.url" :image_url="project.data.image_url.url" :title="project.data.title[0].text" :skills="project.data.skills" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-11 offset-lg-1">
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
import { mapGetters } from 'vuex'

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
    },
    computed: {
        ...mapGetters([
            'asyncProjects'
        ])
    }
}
</script>