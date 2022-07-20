<template>
  <div class="users-list">
    <div
      class="external-event"
      v-for="(item, i) in list"
      :key="i"
      draggable="true"
      @dragstart="onEventDragStart($event, item)"
    >
      <strong>{{ item.title }}</strong>
      ({{ item.duration ? `${item.duration} min` : "no duration" }})
      <div>{{ item.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
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
    };
  },
  methods: {
    onEventDragStart(e, item) {
      e.dataTransfer.setData("event", JSON.stringify(item));
      e.dataTransfer.setData("cursor-grab-at", e.offsetY);
    },
  },
};
</script>
<style lang=""></style>
