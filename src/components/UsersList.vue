<template>
  <div class="users-list">
    <div class="users-list__header">
      <p class="users-list__users-count">Список сотрудников {{ userCount }}</p>
      <p class="users-list__users-noted">Записанных {{ notedCount }}</p>
    </div>
    <div class="users-list__table-header">
      <p class="users-list__table-title">ФИО</p>
      <p>Дата записи</p>
    </div>
    <div class="users-list__group" v-for="group in groups" :key="group.title">
      <p class="users-list__group-title">{{ group.title }}</p>
      <div
        class="users-list__list"
        v-for="(user, i) in group.users"
        :key="i"
        draggable="true"
        @dragstart="onEventDragStart($event, user)"
      >
        <p class="users-list__grouped-user">{{ user.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    groups: {
      type: Array,
      required: true,
    },
    notedCount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    userCount() {
      return this.groups.reduce(
        (prev, current) => prev.users.length + current.users.length
      );
    },
  },
  methods: {
    onEventDragStart(e, user) {
      e.dataTransfer.setData("event", JSON.stringify(user));
      e.dataTransfer.setData("cursor-grab-at", e.offsetY);
    },
  },
};
</script>
<style lang="sass">
.users-list
  width: 382px
  display: flex
  flex-direction: column
  gap: 20px
  &__list
    padding-left: 20px
  &__header
    display: flex
    justify-content: space-between
    gap: 4px
  &__users-count
    font-size: 20px
  &__users-noted
    font-size: 16px
    color: #128BE3
  &__table-header
    font-size: 12px
    display: flex
    color: #999999
    border-bottom: 1px solid #999999
  &__table-title
    flex-basis: 50%
  &__grouped-user
    color: #353535
    font-size: 14px
    font-weight: 400
</style>
