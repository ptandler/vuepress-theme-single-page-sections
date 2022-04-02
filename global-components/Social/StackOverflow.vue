<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
  <!--  <icon color="black" :url="url" :scale="scale" :title="title" :text="text">-->
  <!--    <ComponentLogo/>-->
  <!--  </icon>-->
</template>
<script>
import { generateComponent } from "./generateComponent"
// import "vue-awesome/icons/brands/stack-overflow"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons"
library.add(faStackOverflow)

export default generateComponent("StackOverflow", ["fab", "stack-overflow"], "#f48023", function urlGenerator() {
  // export default generateComponentWithEmbeddedLogo("StackOverflow", logo, function urlGenerator() {
  return `https://stackoverflow.com/users/${this.id}`
})

// import {generateComponentWithEmbeddedLogo} from "./generateComponent"
// import logo from "./stack-overflow-logo.svg?inline"
// export default generateComponentWithEmbeddedLogo("StackOverflow", logo, function urlGenerator() {
//   return `https://stackoverflow.com/users/${this.id}`
// })
</script>
