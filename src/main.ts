import { createApp } from 'vue'
import App from './App.vue'
// vue router
import router from '@/router/index';
// pinia  
import store from '@/store';
// scss样式
import '@/assets/styles/index.scss';



// createApp(App).mount('#app')
const app=createApp(App);

app.use(router);
app.use(store);
app.mount('#app')
