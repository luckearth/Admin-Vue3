import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupAntd } from './ant-design-vue/index'
const app = createApp(App)
setupAntd(app)
app.use(store).use(router).mount('#app')
