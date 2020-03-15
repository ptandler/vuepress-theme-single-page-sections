<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import Icon from "./Icon"
import "vue-awesome/icons/brands/mastodon"

const name = "Mastodon"
export default {
  name: name,
  props: {
    url: { type: String, required: true },
    title: { type: String, default: name },
    scale: { type: Number, required: false },
    text: { type: String, required: false },
    iconName: { type: String, default: "brands/mastodon" },
    iconColor: { type: String, default: "#2b90d9" },
  },
  components: { Icon },
}
</script>
