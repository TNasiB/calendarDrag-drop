<template>
  <header class="app-header">
    <div class="app-header__pagination">
      <img src="/src/assets/img/arrow-left.svg" />
      <p class="app-header__date">1205-20 от 01.01.2020</p>
    </div>
    <div class="app-header__info">
      <div class="app-header__account-info">
        <img src="/src/assets/img/account-icon.svg" />
        <p>ООО «Технониколь»</p>
      </div>
      <div class="app-header__card">
        <img src="/src/assets/img/card.svg" />
        <p class="app-header__card-counter">{{ cardCount }}</p>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      cardCount: 4,
    };
  },
};
</script>
<style lang="sass" scoped>
.app-header
  display: flex
  align-items: center
  justify-content: space-between
  &__pagination
    display: flex
    align-items: center
    gap: 4px
    position: relative
    color: #999999
    font-size: 16px
    & img
      position: absolute
      left: -40px
      cursor: pointer
  &__info
    display: flex
    align-items: center
    gap: 40px
  &__account-info
    display: flex
    gap: 8px
    align-items: center
  &__card
    display: flex
    align-items: center
    gap: 4px
  &__card-counter
    border-radius: 50%
    color: #fff
    padding: 0 6px
    background-color: #E31243
    text-align: center
</style>
