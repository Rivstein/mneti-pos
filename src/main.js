import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// uikit
import './assets/uikit/css/uikit.min.css'
import './assets/uikit/js/uikit.min.js'
import './assets/uikit/js/uikit-icons.min.js'

// custom css
import'./assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
