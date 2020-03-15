<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import "vue-awesome/icons/brands/keybase"

export default generateComponent("Keybase", "brands/keybase", "#3663ea", function urlGenerator() {
  return `https://keybase.io/${this.id}`
})
</script>
