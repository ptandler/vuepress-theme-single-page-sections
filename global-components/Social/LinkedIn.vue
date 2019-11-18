<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" title="LinkedIn" />
</template>
<script>
import Icon from "./Icon"
import "vue-awesome/icons/brands/linkedin-in"

export default {
  name: "LinkedIn",
  props: ["id", "scale"],
  components: { Icon },
  computed: {
    iconName() {
      return "brands/linkedin-in"
    },
    iconColor() {
      return "#0077B5"
    },
    url() {
      return `https://www.linkedin.com/in/${this.id}/`
    },
  },
}
</script>
