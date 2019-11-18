<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" title="ResearchGate" />
</template>
<script>
import Icon from "./Icon"
import "vue-awesome/icons/brands/researchgate"

export default {
  name: "ResearchGate",
  props: ["id", "scale"],
  components: { Icon },
  computed: {
    iconName() {
      return "brands/researchgate"
    },
    iconColor() {
      return "#0077B5"
    },
    url() {
      return `https://www.researchgate.net/profile/${this.id}`
    },
  },
}
</script>
