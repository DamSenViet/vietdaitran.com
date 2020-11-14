<template>
  <div class="theme-container">
    <Navbar />

    <main>
      <Page />
    </main>
  </div>
</template>

<script>
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";

export default {
  name: "Layout",

  components: {
    Navbar,
    Page,
  },
};
</script>

<style lang="stylus" scoped>
@import './../styles/screens';

main {
  margin-left: 16px;
  margin-right: 16px;
  padding-bottom: 5rem;

  +screens-sm() {
    margin-left: 32px;
    margin-right: 32px;
  }

  +screens-md() {
    margin-left: 48px;
    margin-right: 48px;
    $max-content-width = 850px;

    +respond-to-width($max-content-width + @margin-left + @margin-right) {
      max-width: $max-content-width;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>