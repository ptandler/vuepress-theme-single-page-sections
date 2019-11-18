<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" title="XING" />
</template>
<script>
import Icon from "./Icon"
import "vue-awesome/icons/brands/xing"

export default {
  name: "XING",
  props: ["id", "scale"],
  components: { Icon },
  computed: {
    iconName() {
      return "brands/xing"
    },
    iconColor() {
      return "#b0d400"
    },
    url() {
      return `https://www.xing.com/profile/${this.id}`
    },
  },
}
</script>
