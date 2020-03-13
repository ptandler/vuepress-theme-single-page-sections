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
  data() {
    return {
      iconName: "brands/github",
      iconColor: "#171515", // github banner color #24292e
    }
  },
  computed: {
    url() {
      return `https://www.github.com/${this.id}`
    },
  },
}
</script>
