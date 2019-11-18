<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" title="Keybase" />
</template>
<script>
import Icon from "./Icon"
import "vue-awesome/icons/brands/keybase"

export default {
  name: "Keybase",
  props: ["id", "scale"],
  components: { Icon },
  computed: {
    iconName() {
      return "brands/keybase"
    },
    iconColor() {
      return "#3663ea"
    },
    url() {
      return `https://keybase.io/${this.id}`
    },
  },
}
</script>
