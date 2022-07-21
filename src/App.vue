<template>
  <div id="app" class="appworkplace">
    <section class="appworkplace__main">
      <PickerCalendar
        :events="events"
        @add-event="addEvent"
        @remove-item="removeItem"
      />
      <UserList
        :groups="groups"
        :notedCount="notedCount"
        @remove-user="removeItem"
      />
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
      groups: [
        {
          title: "Отдел продаж",
          users: [
            {
              id: 1,
              name: "Иванов Иван Иванович",
              duration: 60,
              title: "Отдел продаж",
            },
            {
              id: 2,
              name: "Иванов Иван Васильевич",
              duration: 60,
              title: "Отдел продаж",
            },
            {
              id: 3,
              name: "Иванов Иван Евгеневич",
              duration: 60,
              title: "Отдел продаж",
            },
            {
              id: 4,
              name: "Иванов Иван Андреевич",
              duration: 60,
              title: "Отдел продаж",
            },
            {
              id: 5,
              name: "Иванов Иван Алексеевич",
              duration: 60,
              title: "Отдел продаж",
            },
            {
              id: 6,
              name: "Иванов Иван Георгиевич",
              duration: 60,
              title: "Отдел продаж",
            },
            {
              id: 7,
              name: "Иванов Иван Глебович",
              duration: 60,
              title: "Отдел продаж",
            },
            {
              id: 8,
              name: "Иванов Иван Артемович",
              duration: 60,
              title: "Отдел продаж",
            },
            {
              id: 9,
              name: "Иванов Иван Ирекович",
              duration: 60,
              title: "Отдел продаж",
            },
          ],
        },
        {
          title: "Склад",
          users: [
            {
              id: 1,
              name: "Иванов Иван Иванович",
              duration: 60,
              title: "Склад",
            },
            {
              id: 2,
              name: "Иванов Иван Васильевич",
              duration: 60,
              title: "Склад",
            },
            {
              id: 3,
              name: "Иванов Иван Евгеневич",
              duration: 60,
              title: "Склад",
            },
            {
              id: 4,
              name: "Иванов Иван Андреевич",
              duration: 60,
              title: "Склад",
            },
            {
              id: 5,
              name: "Иванов Иван Алексеевич",
              duration: 60,
              title: "Склад",
            },
            {
              id: 6,
              name: "Иванов Иван Георгиевич",
              duration: 60,
              title: "Склад",
            },
            {
              id: 7,
              name: "Иванов Иван Глебович",
              duration: 60,
              title: "Склад",
            },
            {
              id: 8,
              name: "Иванов Иван Артемович",
              duration: 60,
              title: "Склад",
            },
            {
              id: 9,
              name: "Иванов Иван Ирекович",
              duration: 60,
              title: "Склад",
            },
          ],
        },
      ],
      events: [],
    };
  },
  methods: {
    addEvent(event) {
      this.events.push(event);
    },
    removeItem({ id, title }) {
      const preparedGroup = this.groups.find((group) => group.title === title);
      const extEventToDeletePos = preparedGroup.users.findIndex(
        (user) => user.id === id
      );
      extEventToDeletePos > -1
        ? preparedGroup.users.splice(extEventToDeletePos, 1)
        : "";
    },
  },
  computed: {
    notedCount() {
      return this.events.length;
    },
  },
};
</script>
<style lang="sass">
.appworkplace
  &__main
    display: flex
    justify-content: space-between
    gap: 10px
</style>
