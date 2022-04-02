<template>
  <icon
    v-if="icon_only"
    :name="icon"
    :color="iconColor"
    :title="title || mayBeObfuscatedText"
    :url="maybeObfuscatedHref"
    :scale="scale"
  />
  <a v-else :href="maybeObfuscatedHref" target="_blank" :title="title || mayBeObfuscatedText">
    <fa-icon :icon="icon" scale="1" class="inline-icon" />
    <span v-html="mayBeObfuscatedText" class="protected" />
  </a>
</template>
<script>
import Icon from "../Social/Icon.vue"
export default {
  name: "Contact-Information",
  components: { Icon },
  props: {
    text: {},
    icon: Array,
    url: {},
    title: String,
    icon_only: Boolean,
    scale: Number,
    obfuscate: { type: Boolean, default: true },
  },
  data() {
    return {
      iconColor: "var(--primary)",
    }
  },
  computed: {
    /**
     * if an array is passed as text or url, it is concatenated
     * This is necessary, as the source is (may be) shipped as plain text and would also
     * include the unofuscated email
     */
    maybeObfuscatedHref() {
      let counter = 1
      const url = this.url
      return url instanceof Array
        ? this.obfuscate
          ? "javascript:location.href=" +
            JSON.stringify(url.slice(0).reverse()).replace(/","/g, '", /*' + Date.now() * counter++ + '*/"') +
            '.reverse().join("")'
          : url.join("")
        : url
    },
    mayBeObfuscatedText() {
      let counter = 1
      const text = this.text
      return text instanceof Array
        ? this.obfuscate
          ? text
              .map((str) => `<span class="b">${str}</span>`)
              .join("<span class='a'>" + Date.now() * counter++ + "</span>")
          : text.join("")
        : text
    },
  },
}
</script>
<style lang="scss" scoped>
.fa-icon {
  // vertical-align: text-bottom;
  vertical-align: middle;
}

a .inline-icon {
  width: 2em;
}

// using >>> combinator to provide css for generated html and by-pass css scoping, see https://stackoverflow.com/a/44849563/1480587
// Vue 3 `>>>` ==> `:deep()` https://stackoverflow.com/a/63986379/1480587 & https://vuejs.org/api/sfc-css-features.html#deep-selectors
.protected :deep(.a) {
  display: none;
}
</style>
