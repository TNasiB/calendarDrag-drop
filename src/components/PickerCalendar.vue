<template>
  <div class="picker-calendar">
    <vue-cal
      active-view="month"
      locale="ru"
      hideTitleBar
      hideViewSelector
      editable-events
      small
      :events="events"
      @event-drop="onEventDrop"
      @event-drag-create="logEvents('event-drag-create', $event)"
      :dblclickToNavigate="false"
      style="height: 450px; width: 610px"
    ></vue-cal>
  </div>
</template>

<script>
import VueCal from "vue-cal";

export default {
  components: {
    VueCal,
  },
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onEventDrop({ event, originalEvent, external }) {
      this.$emit("add-event", event);
      if (external) {
        const { id, title } = originalEvent;
        this.$emit("remove-item", { id, title });
      }
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
</style>
