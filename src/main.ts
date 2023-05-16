import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SmartyUI from "dpc-ui-vite";
import "dpc-ui-vite/entry.css";

createApp(App)
    .use(SmartyUI).mount('#app')
