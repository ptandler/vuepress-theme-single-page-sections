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
    <v-icon :name="icon" scale="1" class="inline-icon" />
    <span v-html="mayBeObfuscatedText" class="protected" />
  </a>
</template>
<script>
import Icon from "../Social/Icon"
export default {
  name: "Contact-Information",
  components: { Icon },
  props: {
    text: {},
    icon: String,
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
      return this.url instanceof Array
        ? this.obfuscate
          ? "javascript:location.href=" +
            JSON.stringify(this.url.slice(0).reverse()).replace(/","/g, '", /*' + Date.now() * counter++ + '*/"') +
            '.reverse().join("")'
          : this.url.join("")
        : this.url
    },
    mayBeObfuscatedText() {
      let counter = 1
      return this.text instanceof Array
        ? this.obfuscate
          ? this.text
              .map((str) => `<span class="b">${str}</span>`)
              .join("<span class='a'>" + Date.now() * counter++ + "</span>")
          : this.text.join("")
        : this.text
    },
  },
}
</script>
<style lang="stylus" scoped>
.fa-icon {
  // vertical-align: text-bottom;
  vertical-align: middle;
}

a .inline-icon {
  width: 2em
}

// using >>> combinator to provide css for generated html and by-pass css scoping, see https://stackoverflow.com/a/44849563/1480587
.protected >>> .a {
  display: none;
}
</style>
