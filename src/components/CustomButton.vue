<template>
  <button class="custom-button" :style="cssVariables">
    <slot name="icon" />
    <img v-if="!!icon" :src="`/src/assets/img/${icon}.svg`" />
    <p>{{ title }}</p>
    <p v-if="!!counter">{{ counter }}</p>
  </button>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "Нажми меня!" },
    icon: { type: String, default: "" },
    color: { type: String, default: "#E31243" },
    counter: { type: Number, default: null },
  },
  computed: {
    cssVariables() {
      return {
        "--bg-color": this.color,
      };
    },
  },
};
</script>
<style lang="sass" scoped>
.custom-button
  padding: 10px 16px
  cursor: pointer
  color: #fff
  background: var(--bg-color)
  border-radius: 4px
  border: 1px solid var(--bg-color)
  display: flex
  align-items: center
  justify-content: space-between
  gap: 4px
  white-space: nowrap
</style>
