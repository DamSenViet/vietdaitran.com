<template>
  <div class="projects">
    <Project v-for="project in projects" :key="project.name" :data="project" />
  </div>
</template>


<script>
import projects from "./../projects";
import Project from "./Project";

export default {
  name: "Projects",

  components: {
    Project,
  },

  props: {
    recent: {
      type: Number,
      required: false,
      default: () => {
        return projects.length;
      },
    },
  },

  computed: {
    projects() {
      return projects.slice(0, this.$props.recent);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import './../styles/screens';

.projects {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(1, 300px);
  grid-template-rows: 1fr;
  justify-content: center;
  justify-items: stretch;
  align-content: flex-start;
  align-items: stretch;
  column-gap: 2rem;
  row-gap: 1rem;

  +screens-sm() {
    justify-content: space-between;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2rem;
    row-gap: 3rem;
  }

  +screens-md() {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>