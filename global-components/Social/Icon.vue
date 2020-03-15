<template>
  <a :href="url" target="_blank" :title="title" :aria-label="title" rel="noopener noreferrer">
    <span class="icon">
      <v-icon :name="name" :color="getColor" :scale="scale" />
    </span>
    {{ text }}
  </a>
</template>
<script>
// import VIcon from "vue-awesome/components/Icon" // imported globally in enhanceApp.js

const Icon = {
  name: "Icon",
  props: {
    name: { type: String, required: true },
    url: { type: String, required: true },
    title: { type: String, required: false },
    text: { type: String, required: false },
    color: { type: String, required: false },
    scale: { type: Number, default: 2 },
  },
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

export default Icon

</script>
<style lang="stylus" scoped>

.theme-default-content:not(.custom) a:hover {
    text-decoration: none;
}

.icon {
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

.inline .icon {
  background-color: transparent;
  height: 1em;
  width: 1em;
  margin: 0 0.1em;
}
</style>
