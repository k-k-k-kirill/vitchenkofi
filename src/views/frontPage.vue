<template>
    <div>
        <Layout>
            <FullHeightSection :scrollable="true">
                <div class="row">
                    <div class="col-lg-6">
                        <h1>
                            Hello.<br>
                            I am <OwnerPhotoReveal :image_url="this.ownerImageUrl">Kirill.</OwnerPhotoReveal><br>
                            Full stack web<br>
                            developer.
                        </h1>
                    </div>
                </div>
            </FullHeightSection>
            <FullHeightSection>
                <div class="row mb-4">
                    <div class="col-lg-5 pt-2">
                        <ProjectTeaser v-for="project in this.asyncProjects.slice(0, 3)" :key="project.id" classes="d-block mb-4" :url="project.data.project_url.url" :image_url="project.data.image_url.url" :title="project.data.title[0].text" :skills="project.data.skills" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-11 offset-lg-1">
                        <BigLink route="/portfolio" title="All works" />
                    </div>
                </div>
            </FullHeightSection>
        </Layout>
    </div>
</template>

<script>
import Layout from '../components/Layout'
import OwnerPhotoReveal from '../components/OwnerPhotoReveal'
import FullHeightSection from '../components/FullHeightSection'
import ProjectTeaser from '../components/ProjectTeaser'
import BigLink from '../components/BigLink'
import { mapGetters } from 'vuex'

export default {
    name: 'FrontPage',
    components: {
        'Layout' : Layout,
        'OwnerPhotoReveal' : OwnerPhotoReveal,
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
            'asyncProjects',
            'ownerImageUrl'
        ]),
    }
}
</script>