<template>
    <div class="container">
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
    </div>
</template>

<script>
import OwnerPhotoReveal from '../components/OwnerPhotoReveal/OwnerPhotoReveal'

export default {
    name: 'Front Page',
    components: {
        'OwnerPhotoReveal' : OwnerPhotoReveal
    }
}
</script>