<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" title="Telegram" />
</template>
<script>
import Icon from "./Icon"
import "vue-awesome/icons/brands/telegram-plane"

export default {
  name: "Telegram",
  props: ["id", "scale"],
  components: { Icon },
  computed: {
    iconName() {
      return "brands/telegram-plane"
    },
    iconColor() {
      return "#0088cc"
    },
    url() {
      return `https://t.me/${this.id}`
    },
  },
}
</script>
