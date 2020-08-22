<template>
    <div>
        <Layout>
            <FullHeightSection :scrollable="true">
                <div class="row">
                    <div class="col-lg-6">
                        <h1>
                            Hello.<br>
                            I am <OwnerPhotoReveal>Kirill.</OwnerPhotoReveal><br>
                            Front end<br>
                            developer.
                        </h1>
                    </div>
                </div>
            </FullHeightSection>
            <FullHeightSection>
                <div class="row mb-4">
                    <div class="col-lg-5 pt-2">
                        <ProjectTeaser classes="d-block mb-4" url="https://www.facebook.com" title="Test project" :skills="skills" />
                        <ProjectTeaser classes="d-block mb-4" url="https://www.facebook.com" title="Test project" :skills="skills" />
                        <ProjectTeaser url="https://www.facebook.com" title="Test project" :skills="skills" />
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
    }
}
</script>