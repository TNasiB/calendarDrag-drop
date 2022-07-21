<template>
  <div class="picker-calendar">
    <vue-cal
      active-view="month"
      locale="ru"
      hideViewSelector
      editable-events
      small
      :cellClickHold="false"
      :events="events"
      @event-drop="onEventDrop"
      dblclickToNavigate
      :clickToNavigate="false"
      style="height: 450px; width: 610px"
    >
      <template v-slot:cell-content="{ cell, events }">
        <div
          class="picker-calendar__cell-info"
          :class="defineClassCell(events.length)"
        >
          <span class="vuecal__cell-date">{{ cell.content }}</span>
          <span class="picker-calendar__count-event" v-if="!!events.length">
            {{ events.length }} из 50
          </span>
        </div>
      </template>
    </vue-cal>
    <div class="picker-calendar__footer">
      <div class="picker-calendar__counter">
        <p class="picker-calendar__counter-label">Мест по договору</p>
        <p class="picker-calendar__counter-value" style="color: #353535">20</p>
      </div>
      <div class="picker-calendar__counter">
        <p class="picker-calendar__counter-label">Записанных</p>
        <p class="picker-calendar__counter-value" style="color: #128be3">30</p>
      </div>
      <div class="picker-calendar__counter">
        <p class="picker-calendar__counter-label">Свободных</p>
        <p class="picker-calendar__counter-value" style="color: #06c270">100</p>
      </div>
      <CustomButton
        title="Распределить автоматически"
        color="#128BE3"
        :counter="2"
      />
      <CustomButton title="Записать" />
    </div>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import CustomButton from "../components/CustomButton.vue";

export default {
  components: {
    VueCal,
    CustomButton,
  },
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onEventDrop({ event }) {
      //Если нам пришел не один пользователь а массив,
      //то мы его пересобираем, чтобы добавить сразу группу
      if (!!event.users) {
        event = event.users.map((user) => {
          return Object.assign(user, event);
        });
      }
      this.$emit("add-event", event);
    },
    defineClassCell(count) {
      //Определение для стилей счетчиков
      return count === 0
        ? "empty"
        : count < 25
        ? "less"
        : count < 50
        ? "over"
        : "";
    },
  },
};
</script>
<style lang="sass" scoped>
.picker-calendar
  color: #999999
  .vuecal__cell
    background: #F9F9F9
  .weekday-label
    align-self: flex-start
    color: #353535
  .vuecal__flex[grow]
    width: auto
  .vuecal__weekdays-headings
    padding-right: 0
  .vuecal__cell--selected
    background: #fff
    color: #000
  .vuecal__cell-date
    position: absolute
    top: 8px
    left: 9px
  &__footer
    display: flex
    margin-top: 40px
    gap: 16px
    align-items: center
    justify-content: space-between
  &__counter
    display: flex
    flex-direction: column
    gap: 10px
    font-size: 20px
  &__counter-label
    white-space: nowrap
    font-size: 10px
  &__header
    display: flex
    gap: 4px
  &__cell-info
    & .picker-calendar__count-event
      position: absolute
      bottom: 8px
      left: 8px
      font-size: 12px
    &.empty
      background: #F9F9F9
    &.less
      & .picker-calendar__count-event
        color: #FF8800
    &.over
      & .picker-calendar__count-event
        color: #06C270
</style>
