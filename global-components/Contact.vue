<template>
  <a :href="maybeObfuscatedHref" target="_blank" :title="title ? title : mayBeObfuscatedText">
    <v-icon :name="icon" scale="1" />
    <span v-html="mayBeObfuscatedText" class="protected" />
  </a>
</template>
<script>
export default {
  name: "Contact",
  props: ["text", "icon", "url", "title"],
  computed: {
    /**
     * if an array is passed as text or url, it is concatenated
     * This is necessary, as the source is (may be) shipped as plain text and would also
     * include the unofuscated email
     */
    maybeObfuscatedHref() {
      return this.url instanceof Array
        ? "javascript:location.href=" +
            JSON.stringify(this.url.slice(0).reverse()).replace(/","/g, '", /*' + Date.now() + '*/"') +
            '.reverse().join("")'
        : this.url
    },
    mayBeObfuscatedText() {
      return this.text instanceof Array
        ? this.text
            .map((str) => `<span class="b">${str}</span>`)
            .join("<span class='a'>" + Date.now() + "</span>")
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

// using >>> combinator to allow scoped css for generated html, see https://stackoverflow.com/a/44849563/1480587
.protected >>> .a {
  display: none;
}
</style>
