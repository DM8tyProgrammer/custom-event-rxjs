import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Vue from "vue";
import App from "./main.vue";

new Vue({ render: createElement => createElement(App) }).$mount("#app");
