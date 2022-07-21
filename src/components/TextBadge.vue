<template>
  <div
    class="text-badge"
    :class="{ 'text-badge--sub': sub, 'text-badge--nosub': !sub }"
  >
    <div class="text-badge__label-wrapper">
      <img src="../assets/img/badge-icon.svg" />
      <p class="text-badge__label">{{ label }}</p>
    </div>
    <div class="text-badge__label-info">
      <p v-if="sub" class="text-badge__date">11.11.1111</p>
      <img :src="`../src/assets/img/${defineIcon}.svg`" @click="removeUser" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sub: { type: Boolean, default: false },
    id: { type: Number, default: null },
    group: { type: String, default: "" },
    label: { type: String, required: true },
  },
  computed: {
    defineIcon() {
      return this.sub ? "trash-icon" : "arrow-bottom";
    },
  },
  methods: {
    removeUser() {
      this.$emit("remove-user", {
        id: this.id,
        title: this.group,
      });
    },
  },
};
</script>
<style lang="sass" scoped>
.text-badge
  display: flex
  align-items: center
  gap: 3px
  padding: 16px
  font-size: 16px
  font-weight: 500
  cursor: pointer
  justify-content: space-between
  &__label-wrapper, &__label-info
    display: flex
    align-items: center
    gap: 7px
  &__label-info
    gap: 80px
  &:hover
    background: #F2F2F2
  &__label
    padding-top: 4px
  &--sub
    padding-left: 40px
    font-size: 14px
    font-weight: 400
  &--nosub
    & .text-badge__label
      // margin-right: 70px
</style>
