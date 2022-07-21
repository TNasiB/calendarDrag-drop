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
    <div class="users-list__group--scroll">
      <div class="users-list__group" v-for="group in groups" :key="group.title">
        <AppDropdown>
          <template #header>
            <TextBadge
              draggable="true"
              @dragstart="onEventDragStart($event, group.users, group.title)"
              :label="group.title"
              @click="toggleDropdown"
            />
          </template>

          <div class="users-list__dropdown">
            <TextBadge
              v-for="user in group.users"
              :key="user.name"
              :label="user.name"
              :id="user.id"
              :group="group.title"
              :sub="true"
              :end="user.end"
              @dragstart="onEventDragStart($event, user)"
              @remove-user="removeUser"
              draggable="true"
            />
          </div>
        </AppDropdown>
      </div>
    </div>
  </div>
</template>

<script>
import TextBadge from "../components/TextBadge.vue";
import AppDropdown from "../components/AppDropdown.vue";

export default {
  components: { TextBadge, AppDropdown },
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
      let count = 0;
      this.groups.forEach((group) => {
        count += group.users.length;
      });
      return count;
    },
  },
  methods: {
    onEventDragStart(e, data, title) {
      if (Array.isArray(data)) {
        const obj = { users: [...data], title };
        e.dataTransfer.setData("event", JSON.stringify(obj));
        e.dataTransfer.setData("cursor-grab-at", e.offsetY);
        return;
      }
      e.dataTransfer.setData("event", JSON.stringify(data));
      e.dataTransfer.setData("cursor-grab-at", e.offsetY);
    },
    removeUser(data) {
      this.$emit("remove-user", data);
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
  padding: 5px
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
    padding-bottom: 10px
    border-bottom: 1px solid #999999
  &__table-title
    flex-basis: 50%
  &__grouped-user
    color: #353535
    font-size: 14px
    font-weight: 400
  &__group
    border-bottom: 1px solid #999999
  &__group--scroll
    height: 400px
    overflow-y: scroll
</style>
