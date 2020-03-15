<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import "vue-awesome/icons/brands/skype"

export default generateComponent("Skype", "brands/skype", "#00aff0", function urlGenerator() {
  return `skype:${this.id}`
})
</script>
