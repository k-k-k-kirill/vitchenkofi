<template>
    <div>
        <SiteOwner />
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
import SiteOwner from '../components/SiteOwner'
import FullHeightSection from '../components/FullHeightSection'

export default {
    name: 'FrontPage',
    components: {
        'Layout' : Layout,
        'OwnerPhotoReveal' : OwnerPhotoReveal,
        'SiteOwner' : SiteOwner,
        'FullHeightSection' : FullHeightSection
    }
}
</script>