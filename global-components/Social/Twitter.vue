<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" title="Twitter" />
</template>
<script>
import Icon from "./Icon"
import "vue-awesome/icons/brands/twitter-square"

export default {
  name: "Twitter",
  props: ["id", "scale"],
  components: { Icon },
  computed: {
    iconName() {
      return "brands/twitter-square"
    },
    iconColor() {
      return "#1DA1F2"
    },
    url() {
      return `https://twitter.com/${this.id}`
    },
  },
}
</script>
