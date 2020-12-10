<template>
  <header class="navbar">
    <div class="spacer"></div>
    <div class="actual">
      <RouterLink :to="$localePath" class="logo">
        <div class="text">V</div>
      </RouterLink>

      <div
        :class="{
          hamburger: true,
          active: isMenuOpen,
        }"
        @click="isMenuOpen = !isMenuOpen"
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div
        :class="{
          menu: true,
          active: isMenuOpen,
        }"
      >
        <nav class="links-container">
          <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
          <SearchBox
            v-else-if="
              $site.themeConfig.search !== false &&
              $page.frontmatter.search !== false
            "
          />
          <ul class="links">
            <li v-for="(menuItem, i) in menuItems">
              <RouterLink
                v-if="!isExternal(ensureEndingSlash(menuItem.link))"
                :to="menuItem.link"
                :class="{
                  active: isActive($route, ensureEndingSlash(menuItem.link)),
                }"
              >
                <component :is="menuItem.icon" />
                <span>{{ menuItem.text }}</span>
              </RouterLink>
              <a v-else :href="menuItem.link">
                <component :is="menuItem.icon" />
                <span>{{ menuItem.text }}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div
      :class="{
        cover: true,
        active: isMenuOpen,
      }"
    ></div>
  </header>
</template>

<script>
import {
  HomeIcon,
  BriefcaseIcon,
  PackageIcon,
  ActivityIcon,
  GithubIcon,
  MailIcon,
} from "vue-feather-icons";
import AlgoliaSearchBox from "@AlgoliaSearchBox";
import SearchBox from "@SearchBox";
import { isExternal, isActive, ensureEndingSlash } from "./../util";

export default {
  name: "Navbar",

  components: {
    SearchBox,
    AlgoliaSearchBox,
  },

  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        {
          text: "Home",
          link: "/",
          icon: HomeIcon,
        },
        {
          text: "Projects",
          link: "/projects/",
          icon: PackageIcon,
        },
        {
          text: "Planned",
          link: "/planned/",
          icon: ActivityIcon,
        },
        {
          text: "GitHub",
          link: "https://github.com/DamSenViet",
          icon: GithubIcon,
        },
        {
          text: "Contact",
          link: "/contact/",
          icon: MailIcon,
        },
      ],
    };
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    },
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isMenuOpen = false;
    });
  },

  methods: {
    isExternal,
    isActive,
    ensureEndingSlash,
  },
};
</script>

<style lang="stylus" scoped>
@import './../styles/colors';
@import './../styles/fonts';
@import './../styles/screens';
@import './../styles/interactions';

*::v-deep {
  box-sizing: border-box;
}

.navbar {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  $size = 32px;

  > .spacer, > .actual {
    position: relative;
    top: 0;
    left: 0;
    padding-top: 32px;
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
    height: @padding-top + @padding-bottom + $size;

    +screens-sm() {
      padding-left: 32px;
      padding-right: 32px;
    }

    +screens-md() {
      padding-left: 48px;
      padding-right: 48px;
    }

    +screens-lg() {
      padding-left: 64px;
      padding-right: 64px;
    }
  }

  > .actual {
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    width: 100%;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: stretch;

    > .logo {
      width: $size;
      height: $size;
      display: grid;
      justify-items: center;
      background-color: rgba($colors-background, 0.8);
      align-items: center;
      border-width: 2px;
      border-style: solid;
      border-color: $colors-text;

      > .text {
        color: $colors-text;
        font-family: $fonts-monoton;
        font-size: 1.2rem;
      }
    }

    > .hamburger {
      position: relative;
      top: 0;
      left: 0;
      width: $size;
      height: $size;
      border: 0px;
      outline: unset;
      background-color: rgba($colors-background, 0.9);
      border-reveal($colors-text, 1px, 0px, 2px);
      $start = translate(-50%, -50%);
      $gap = 7px;

      &:hover {
        cursor: pointer;
      }

      > .bar {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: $start;
        width: $size - 7px;
        height: 2px;
        background-color: $colors-text;
        transition: transform 0.5s;

        &:nth-child(1) {
          transform: $start translate(0px, (-($gap)));
        }

        &:nth-child(2) {
          transform: $start translate(0px, 0px);
        }

        &:nth-child(3) {
          transform: $start translate(0px, $gap);
        }
      }

      &.active {
        >.bar {
          &:nth-child(1) {
            transform: $start translate(0px, 0px) rotateZ(-405deg);
          }

          &:nth-child(2) {
            transform: $start translate(0px, 0px) rotateY(90deg);
          }

          &:nth-child(3) {
            transform: $start translate(0px, 0px) rotateZ(-495deg);
          }
        }
      }
    }
  }

  .menu {
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;
    width: calc(100% - 4rem);
    transform: translate(100%, 0px);
    height: 100%;
    overflow: visible;
    background-color: $colors-background;
    border-left: 1px solid $colors-solitude;
    transition: transform 0.35s ease;

    &.active {
      transform: translate(0px, 0px);
    }

    .links-container {
      display: grid;
      padding-top: 6rem;
      padding-left: 0rem;
      padding-bottom: 6rem;
      grid-template-columns: minmax(min-content, max-content);
      justify-content: center;
      align-content: center;
      min-height: 100%;
      row-gap: 1rem;

      > .links {
        display: grid;
        margin-top: 0px;
        margin-bottom: 0px;
        padding-left: 0px;
        list-style: none;
        row-gap: 1rem;

        > li {
          > a {
            font-family: sans-serif;
            font-weight: 400;
            font-size: 1.15rem;
            position: relative;
            top: 0;
            left: 0;
            padding: 0.5rem 1rem;
            display: grid;
            grid-template-columns: max-content 1fr;
            column-gap: 1rem;
            color: $colors-text;
            justify-content: center;
            align-items: center;
            border-reveal($colors-text, 1px, 0px, 0px);

            &.active {
              text-decoration: line-through;
            }

            +screens-sm() {
              font-size: 1.15rem;
            }

            > svg {
              height: 2rem;
              stroke: $colors-text;
            }
          }
        }
      }
    }
  }

  .cover {
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: content-box;
    transform: translate(-100%, 0px);
    z-index: -3;
    width: 4rem;
    height: 100%;
    background-color: #f8f8fa;
    border-right: 1px solid $colors-solitude;
    transition: transform 0.35s ease;

    &.active {
      transform: translate(0px, 0px);
    }
  }

  +screens-sm() {
    .menu {
      width: calc(100% - 6rem);
    }

    .cover {
      width: 6rem;
    }
  }

  +screens-md() {
    .menu {
      width: calc(100% - 8rem);
    }

    .cover {
      width: 8rem;
    }
  }

  +screens-lg() {
    .menu {
      width: calc(100% - 10rem);
    }

    .cover {
      width: 10rem;
    }
  }

  ::v-deep .search-box {
    justify-self: stretch;
    position: relative;
    top: 0;
    left: 0;
    margin-right: 0px;
    z-index: 1;

    > input {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      padding-left: 3rem;
      box-sizing: border-box;
      height: 2.5rem;
      width: 100%;
      left: 0px;
      border-radius: 0px;
      border: 1px solid $colors-text;
      color: $colors-text;
      font-family: sans-serif, $fonts-open-sans;
      background-position: 0.75rem center;

      &:focus {
        border: @border;
        left: 0px;
      }

      +screens-sm() {
      }

      &:focus {
        border-color: black;
      }
    }

    > .suggestions {
      border: 1px solid $colors-text;
      border-radius: 0px;

      > .suggestion {
        border-radius: 0px;

        &:hover {
          background-color: $colors-hint-of-red;
        }

        > a {
          > .page-title {
            color: $colors-text;
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>
