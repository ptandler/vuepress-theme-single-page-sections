<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" title="GitHub" />
</template>
<script>
import Icon from "./Icon"
import "vue-awesome/icons/brands/github"

export default {
  name: "GitHub",
  props: ["id", "scale"],
  components: { Icon },
  computed: {
    iconName() {
      return "brands/github"
    },
    iconColor() {
      return "#171515"  // github banner color #24292e
    },
    url() {
      return `https://www.github.com/${this.id}`
    },
  },
}
</script>
