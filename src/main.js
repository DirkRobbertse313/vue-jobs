import './assets/main.css'
import 'primeicons/primeicons.css';
import Toast from 'vue-toastification'; // install: npm install vue-toastification@next for a nice toast message
import 'vue-toastification/dist/index.css'; // install: npm install vue-toastification@next for a nice toast message
import router from './router';
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.use(router);
app.use(Toast); // install: npm install vue-toastification@next for a nice toast message

app.mount('#app')
