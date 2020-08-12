<template>
  <div>
    <SiteOwner />
    <OwnerLinks />
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import OwnerLinks from '../components/OwnerLinks'
import SiteOwner from '../components/SiteOwner'

export default {
  name: "Base",
  components : {
    'SiteOwner' : SiteOwner,
    'OwnerLinks' : OwnerLinks,
  }
};
</script>