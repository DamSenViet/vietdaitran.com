<template>
  <RouterLink :to="data.link" class="project">
    <img :src="data.img" />
    <div class="name">{{ data.name }}</div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import './../styles/colors';
@import './../styles/interactions';
@import './../styles/fonts';

.project {
  position: relative;
  top: 0;
  left: 0;
  border-reveal($colors-text, 1px, 10px, 10px);

  > img {
    width: 100%;
  }

  > .name {
    font-size: 0.75rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: black;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
}
</style>