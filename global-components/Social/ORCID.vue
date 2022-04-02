<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
// import "vue-awesome/icons/brands/orcid"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faOrcid } from "@fortawesome/free-brands-svg-icons"

library.add(faOrcid)

// pending: use orcid-logo.svg
export default generateComponent("ORCID", ["fab", "orcid"], "#a6ce39", function urlGenerator() {
  return `https://orcid.org//${this.id}`
})
</script>
