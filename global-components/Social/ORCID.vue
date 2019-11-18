<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" title="ORCID" />
</template>
<script>
import Icon from "./Icon"
import "vue-awesome/icons/brands/orcid"

export default {
  name: "ORCID",
  props: ["id", "scale"],
  components: { Icon },
  computed: {
    iconName() {
      return "brands/orcid"
    },
    iconColor() {
      return "#a6ce39"
    },
    url() {
      return `https://www.researchgate.net/profile/${this.id}`
    },
  },
}
</script>
