<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <router-link :to="$localePath" class="home-link">
      <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      />
      <span
        ref="siteName"
        class="site-name"
        v-if="$page.title || $siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $page.title || $siteTitle }}</span>
    </router-link>

    <!-- begin added -->
    <img
      v-if="$frontmatter.sidebarImage"
      class="img-profile img-profile-navbar"
      :class="imgProfileClasses"
      :src="$frontmatter.sidebarImage"
    />
    <!-- end added -->

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox
        v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"
      />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import ParentNavbar from "@parent-theme/components/Navbar.vue"
import throttle from "lodash/throttle"
import extend from "lodash/extend"

const Navbar = extend({}, ParentNavbar, {
  data() {
    return extend(ParentNavbar.data(), {
      hasScrolledDown: false,
    })
  },
  computed: extend({}, ParentNavbar.computed, {
    imgProfileClasses() {
      // if it has been scrolled down, add an additional class
      return this.hasScrolledDown ? "img-profile-navbar-small" : null
    },
  }),
  mounted() {
    if (ParentNavbar.mounted) {
      ParentNavbar.mounted.call(this)
    }
    console.log("register handleScroll")
    this.handleThrottledScroll = throttle(this.handleScroll, 250)
    window.addEventListener("scroll", this.handleThrottledScroll)
  },
  beforeDestroy() {
    if (ParentNavbar.beforeDestroy) {
      ParentNavbar.beforeDestroy.call(this)
    }
    console.log("remove handleScroll")
    window.removeEventListener("scroll", this.handleThrottledScroll)
  },
  methods: extend({}, ParentNavbar.methods, {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      // console.log("calling handleScroll", window.scrollY)
      this.hasScrolledDown = window.scrollY > 20
    },
  }),
})

export default Navbar
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1.5rem;

.navbar {
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbarHeight - 1.4rem;

  a, span, img {
    display: inline-block;
  }

  .logo {
    margin-right: 0.8rem;
    min-width: $navbarHeight - 1.4rem;
    height: $navbarHeight - 1.4rem;
    vertical-align: top;
  }

  .site-name {
    position: relative;
    color: $textColor;
    font-weight: 600;
    font-size: 1.3rem;
  }

  .links {
    position: absolute;
    top: $navbar-vertical-padding;
    right: $navbar-horizontal-padding;
    display: flex;
    box-sizing: border-box;
    padding-left: 1.5rem;
    background-color: white;
    white-space: nowrap;
    font-size: 0.9rem;

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }
  }

  .img-profile {
    position: fixed;
    top: 0.7rem;
    right: 0.7rem;
    max-width: 20vw;
    max-height: 20vh;
    border-radius: $borderRadius;
    transition: max-height $transitionSpeedTransform;

    &.img-profile-navbar-small {
      max-height: 3.6rem - 0.7rem - 0.7rem;
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;

    .can-hide {
      display: none;
    }

    .links {
      padding-left: 1.5rem;
    }

    .site-name {
      overflow: hidden;
      width: calc(100vw - 9.4rem);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
