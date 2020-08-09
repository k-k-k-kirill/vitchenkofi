<template>
    <div class="container py-5">
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
    </div>
</template>

<script>
import OwnerPhotoReveal from '../components/OwnerPhotoReveal'

export default {
    name: 'FrontPage',
    components: {
        'OwnerPhotoReveal' : OwnerPhotoReveal
    }
}
</script>