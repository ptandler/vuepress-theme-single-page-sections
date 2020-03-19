<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import "vue-awesome/icons/brands/telegram-plane"

export default generateComponent("Telegram", "brands/telegram-plane", "#0088cc", function urlGenerator() {
  return `https://t.me/${this.id}`
})
</script>
