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
  data() {
    return {
      iconName: "brands/facebook",
      iconColor: "#3B5998",
    }
  },
  computed: {
    url() {
      return `https://www.facebook.com/${this.id}`
    },
  },
}
</script>
