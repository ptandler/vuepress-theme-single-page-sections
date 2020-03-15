<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import "vue-awesome/icons/brands/xing"

export default generateComponent("XING", "brands/xing", "#b0d400", function urlGenerator() {
  return `https://www.xing.com/profile/${this.id}`
})
</script>
