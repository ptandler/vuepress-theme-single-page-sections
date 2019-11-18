<template>
  <a :href="url" target="_blank" :alt="title">
    <v-icon :name="name" :color="getColor" :scale="scale ? scale : 2" />
    {{text}}
  </a>
</template>
<script>
// import VIcon from "vue-awesome/components/Icon"

export default {
  name: "Icon",
  props: ["name", "color", "url", "title", "text", "scale"],
  // components: { VIcon },
  computed: {
    getColor() {
      if (this.$themeConfig && this.$themeConfig.social && this.$themeConfig.social.monochrome_icons) {
        return null // use default color
      }
      return this.color
    },
  },
}
</script>
<style lang="stylus" scoped>
a {
  display: inline-flex;
  background-color: $white;
  border-radius: 100%;
  text-align: center;
  height: 3.5rem;
  width: 3.5rem;
  margin: 0.5em;

  & > * {
    margin: auto;
  }
}

a.inline {
  background-color: transparent;
  height: 1em;
  width: 1em;
  margin: 0 0.1em;
}
</style>
