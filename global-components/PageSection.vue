<template>
  <section class="page-section header-anchor" :id="myId">
    <div class="section-content">
      <h2>{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>
<script>
const slugify = require("@vuepress/shared-utils/lib/slugify.js")

export default {
  name: "PageSection",
  props: ["id", "title"],
  computed: {
    myId() {
      return this.id ? this.id : slugify(this.title)
    },
  },
}
</script>
<style lang="stylus">
.theme-default-content {
  scroll-snap-type: y proximity;

  section.page-section {
    display: flex;
    align-items: center;
    padding-top: 1rem;
    min-height: 100vh;
    width: 100%;
    scroll-snap-align: start;

    .section-content {
      padding: 2em;
    }
  }
}
</style>
