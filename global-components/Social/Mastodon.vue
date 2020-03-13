<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" title="Mastodon" />
</template>
<script>
import Icon from "./Icon"
import "vue-awesome/icons/brands/mastodon"

export default {
  name: "Mastodon",
  props: ["url", "scale"],
  components: { Icon },
  data() {
    return {
      iconName: "brands/mastodon",
      iconColor: "#2b90d9",
    }
  },
}
</script>
