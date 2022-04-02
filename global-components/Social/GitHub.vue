<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
// import "vue-awesome/icons/brands/github"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

library.add(faGithub)

export default generateComponent(
  "GitHub",
  ["fab", "github"],
  "#171515", // or use github banner color #24292e?
  function urlGenerator() {
    return `https://www.github.com/${this.id}`
  }
)
</script>
