<template>
  <div id="app" class="appworkplace">
    <section class="appworkplace__main">
      <PickerCalendar :events="events" />
      <UserList :list="list" />
    </section>
  </div>
</template>

<script>
import PickerCalendar from "./components/PickerCalendar.vue";
import UserList from "./components/UsersList.vue";

export default {
  components: {
    PickerCalendar,
    UserList,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          title: "Ext. Event 1",
          content: "content 1",
          duration: 60,
        },
        {
          id: 2,
          title: "Ext. Event 2",
          content: "content 2",
          duration: 30,
        },
        {
          id: 3,
          title: "Ext. Event 3",
          content: "content 3",
        },
      ],
      events: [],
    };
  },
  methods: {
    onEventDragStart(e, item) {
      e.dataTransfer.setData("event", JSON.stringify(item));
      e.dataTransfer.setData("cursor-grab-at", e.offsetY);
    },
    onEventDrop({ event, originalEvent, external }) {
      this.events.push(event);
      if (external) {
        const extEventToDeletePos = this.list.findIndex(
          (item) => item.id === originalEvent.id
        );
        if (extEventToDeletePos > -1) this.list.splice(extEventToDeletePos, 1);
      }
    },
  },
};
</script>
<style lang="sass">
.appworkplace
  &__main
    display: flex
</style>
