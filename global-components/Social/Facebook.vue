<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" title="Facebook" :text="text" />
</template>
<script>
import Icon from "./Icon"
import "vue-awesome/icons/brands/facebook"

export default {
  name: "Facebook",
  props: ["id", "scale", "text"],
  components: { Icon },
  computed: {
    iconName() {
      return "brands/facebook"
    },
    iconColor() {
      return "#3B5998"
    },
    url() {
      return `https://www.facebook.com/${this.id}`
    },
  },
}
</script>
