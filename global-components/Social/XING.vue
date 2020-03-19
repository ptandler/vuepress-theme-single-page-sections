<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import "vue-awesome/icons/brands/xing"

// todo add option (prop) to use xing.to short URL instead
export default generateComponent("XING", "brands/xing", "#b0d400", function urlGenerator() {
  return `https://www.xing.com/profile/${this.id}`
})
</script>
