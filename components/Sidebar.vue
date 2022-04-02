<template>
  <aside class="sidebar">
    <NavLinks />
    <div class="sidebar-content">
      <img
        v-if="$frontmatter.sidebarImage"
        class="img-profile img-profile-sidebar"
        :src="$withBase($frontmatter.sidebarImage)"
        alt="$frontmatter.sidebarImageAlt"
      />
      <slot name="top" />
      <SidebarLinks :depth="0" :items="myItems" />
      <slot name="bottom" />
    </div>
  </aside>
</template>

<script>
import SidebarLinks from "@theme/components/SidebarLinks.vue"
import NavLinks from "@theme/components/NavLinks.vue"

export default {
  name: "Sidebar",

  components: { SidebarLinks, NavLinks },

  props: ["items"],

  computed: {
    myItems() {
      // console.info("items", this, "fm:", this.$page)
      const sections = this.$frontmatter.sections
      if (!sections) {
        return this.items
      }
      const page = this.$page
      return [
        {
          type: "group",
          collapsable: false,
          title: this.$frontmatter.title || this.$title,
          path: page.path + "#app",
          children: sections.map((section) => ({
            type: "auto",
            title: section instanceof Array ? section[1] : section,
            basePath: page.path,
            path: page.path + "#" + (section instanceof Array ? section[0] : section.toLowerCase()),
            children: [],
          })),
        },
      ]
    },
  },

  created() {
    // console.log("sidebar: ", this.items)
  },
}
</script>

<style lang="scss">
.sidebar-group {
  color: $sidebarHeadingTextColor;
}

.sidebar {
  display: flex;
  flex-direction: column;
  background-color: $sidebarBackgroundColor !important; // important needed to fix a CSS processing error in production mode
  text-align: center;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  .sidebar-content {
    margin: auto;
    width: 65%;
  }

  .dropdown-wrapper {
    .dropdown-title {
      color: $sidebarTextColor;
    }

    .nav-dropdown {
      top: unset;
      right: unset;
      border-radius: $borderRadius;
      background-color: white;

      .dropdown-item {
        a {
          &:hover {
            color: $sidebarAccentColor;
          }

          &.router-link-active {
            color: $sidebarAccentColor;
          }
        }
      }
    }
  }

  .img-profile {
    max-width: 100%;
    max-height: 20vh;
    // border: 0.2rem solid $secondary; // fade-out($white, 0.6);
    border-radius: $borderRadius;
  }

  .nav-links {
    padding: 0.5rem 0 0.75rem;
    // display: none;
    border-bottom: 1px solid $borderColor;

    a {
      font-weight: 600;
    }

    .nav-item,
    .repo-link {
      display: block;
      padding: 0.5rem 1.5rem;
      font-size: 1.1em;
      line-height: 1.25rem;
    }
  }

  .sidebar-heading {
    padding: 0.35rem 0;
    color: $sidebarHeadingTextColor;
    transition: color $transitionSpeedColor ease;

    &.clickable {
      &:hover,
      &.active {
        color: $sidebarAccentColor;
      }
    }
  }

  .sidebar-links {
    // padding: 0.5rem 0;
    text-align: left;

    & > li > a.sidebar-link {
      padding: 0.25em 0 0.25em 1em;
      color: $sidebarTextColor;
      font-weight: bold;
      font-size: 1.1em;
      line-height: 1;
      transition: color $transitionSpeedColor ease;

      &:hover {
        color: $sidebarAccentColor;
      }

      &.active {
        border-left-color: $sidebarAccentColor;
        color: $sidebarAccentColor;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .sidebar {
    transition: transform $transitionSpeedTransform ease;

    .nav-links {
      display: block;

      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {
        top: calc(1rem - 2px);
      }
    }

    & > .sidebar-links {
      padding: 1rem 0;
    }

    .img-profile-sidebar {
      display: none;
    }
  }
}
</style>
