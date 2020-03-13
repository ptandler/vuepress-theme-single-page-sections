<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" title="Sykpe" />
</template>
<script>
import Icon from "./Icon"
import "vue-awesome/icons/brands/skype"

export default {
  name: "Sykpe",
  props: ["id", "scale"],
  components: { Icon },
  data() {
    return {
      iconName: "brands/skype",
      iconColor: "#00aff0",
    }
  },
  computed: {
    url() {
      return `skype:${this.id}`
    },
  },
}
</script>
