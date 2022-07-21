<template>
  <div class="app-dropdown">
    <div class="app-dropdown__toggler" @click="toggleActive">
      <slot name="header" />
    </div>

    <slot v-if="isActive" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
