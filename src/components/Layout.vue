<template>
  <div>
    <SiteOwner />
    <OwnerLinks />
    <NavToggler />
    <NavMenu />
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import OwnerLinks from '../components/OwnerLinks'
import SiteOwner from '../components/SiteOwner'
import NavToggler from '../components/NavToggler'
import NavMenu from '../components/NavMenu'

export default {
  name: "Base",
  components : {
    'SiteOwner' : SiteOwner,
    'OwnerLinks' : OwnerLinks,
    'NavToggler': NavToggler,
    'NavMenu': NavMenu
  }
};
</script>