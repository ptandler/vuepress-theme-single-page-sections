<template>
  <a :href="url" target="_blank" :title="title ? title : text">
    <v-icon :name="icon" scale="1" />
    {{ text }}
  </a>
</template>
<script>
export default {
  name: "Contact",
  props: ["text", "icon", "url", "title"],
}
</script>
