<template>
  <div id="app" class="appworkplace">
    <aside class="appworkplace__sidebar">
      <img src="/src/assets/img/logo-icon.svg" alt="" />
    </aside>
    <section class="appworkplace__main">
      <AppHeader />
      <div class="appworkplace__title-box">
        <h2 class="appworkplace__main-title">
          Предварительный медицинский осмотр лиц, поступающих в учебные
          заведения гражданской авиации (ГА)
        </h2>
        <div class="appworkplace__btn-wrapper">
          <CustomButton title="Добавить сотрудников" />
          <CustomButton title="Удалить всех">
            <template #icon>
              <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                class="appworplace__delete-all-icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8889 0.777778H8.16667L7.38889 0H3.5L2.72222 0.777778H0V2.33333H10.8889V0.777778ZM0.777778 12.4444C0.777778 12.857 0.941666 13.2527 1.23339 13.5444C1.52511 13.8361 1.92077 14 2.33333 14H8.55556C8.96811 14 9.36378 13.8361 9.6555 13.5444C9.94722 13.2527 10.1111 12.857 10.1111 12.4444V3.5H0.777778V12.4444Z"
                  fill="currentColor"
                />
              </svg>
            </template>
          </CustomButton>
        </div>
      </div>
      <div class="appworkplace__main-wrapper">
        <PickerCalendar :events="events" @add-event="addEvent" />
        <UserList
          :groups="groups"
          :notedCount="notedCount"
          @remove-user="removeItem"
        />
      </div>
    </section>
  </div>
</template>

<script>
import PickerCalendar from "./components/PickerCalendar.vue";
import UserList from "./components/UsersList.vue";
import AppHeader from "./components/AppHeader.vue";
import CustomButton from "./components/CustomButton.vue";
import { groups } from "./static/groups.js";

export default {
  components: {
    PickerCalendar,
    UserList,
    AppHeader,
    CustomButton,
  },
  data() {
    return {
      groups: [...groups],
      events: [],
    };
  },
  methods: {
    addEvent(event) {
      const { id, title } = event;
      console.log(id, title);
      this.events = this.events.filter(
        (event) => event.id !== id && event.title !== title
      );
      this.events.push(event);
      const preparedGroup = this.groups.find((group) => group.title === title);
      const user = preparedGroup.users.find((user) => user.id === id);
      Object.assign(user, event);
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
<style lang="sass" scoped>
.appworkplace
  display: flex
  width: 100vw
  height: 100vh
  &__main
    display: flex
    flex-direction: column
    width: 100%
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1)
    padding: 50px 80px
    gap: 20px
  &__main-wrapper
    display: flex
    justify-content: space-between
    gap: 10px
  &__sidebar
    padding: 40px 20px
  &__main-title
    font-size: 24px
    font-weight: 500
    max-width: 618px
  &__title-box
    display: flex
    align-items: center
    justify-content: space-between
  &__btn-wrapper
    display: flex
    align-items: center
    gap: 16px
</style>
