<template>
    <div>
        <Layout>
            <FullHeightSection :scrollable="true">
                <div class="row">
                    <div class="col-lg-6">
                        <h1>
                            Hello.<br>
                            I am <OwnerPhotoReveal imageUrl="@assets/images/mugshot.png">Kirill.</OwnerPhotoReveal><br>
                            Front end<br>
                            developer.
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <Nav />
                    </div>
                </div>
            </FullHeightSection>
            <FullHeightSection>
                <div class="container">
                    <h1>Another full height section</h1>
                </div>
            </FullHeightSection>
        </Layout>
    </div>
</template>

<script>
import Layout from '../components/Layout'
import OwnerPhotoReveal from '../components/OwnerPhotoReveal'
import FullHeightSection from '../components/FullHeightSection'
import Nav from '../components/Nav'

export default {
    name: 'FrontPage',
    components: {
        'Layout' : Layout,
        'OwnerPhotoReveal' : OwnerPhotoReveal,
        'FullHeightSection' : FullHeightSection,
        'Nav' : Nav
    }
}
</script>