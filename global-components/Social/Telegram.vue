<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
// import "vue-awesome/icons/brands/telegram-plane"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"

library.add(faTelegram)

export default generateComponent("Telegram", ["fab", "telegram-plane"], "#0088cc", function urlGenerator() {
  return `https://t.me/${this.id}`
})
</script>
