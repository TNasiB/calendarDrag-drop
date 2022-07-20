import { createApp } from "vue";
import App from "./App.vue";
import "vue-cal/dist/vuecal.css";
import "vue-cal/dist/drag-and-drop.js";
import "vue-cal/dist/i18n/ru.js";

const app = createApp(App);
app.mount("#app");
