<template>
  <a :href="url" target="_blank" :title="title" :aria-label="title" rel="noopener noreferrer">
    <span class="icon">
      <slot><fa-icon v-if="iconName" :icon="iconName" :color="getColor" :scale="scale" /></slot>
    </span>
    {{ text }}
  </a>
</template>
<script>
// imported globally in enhanceApp.js to be available in md files:
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client"

const Icon = {
  name: "Icon",
  props: {
    iconName: { type: Array, required: false },
    url: { type: String, required: true },
    title: { type: String, required: false },
    text: { type: String, required: false },
    color: { type: String, required: false },
    scale: { type: Number, default: 2 },
  },
  // components: { VIcon },
  computed: {
    getColor() {
      const themeData = useThemeData().value
      if (themeData && themeData.social && themeData.social.monochrome_icons) {
        return null // use default color
      }
      return this.color
    },
  },
}

export default Icon
</script>
<style lang="scss" scoped>
@import "@styles/palette.scss";

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
