<template>
  <div class="theme-container">
    <Navbar />

    <main>
      <Home v-if="$page.frontmatter.home" />
      <Content v-else class="theme-default-content" />
    </main>
  </div>
</template>

<script>
import Home from "@theme/components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";

export default {
  name: "Layout",

  components: {
    Home,
    Navbar,
  },

  data() {
    return {
      isNavbarOpen: false,
    };
  },
};
</script>