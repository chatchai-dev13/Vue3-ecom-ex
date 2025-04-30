import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './stores'

import vue3GoogleLogin from 'vue3-google-login'

/* import the fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fas, far)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(store)
app.use(vue3GoogleLogin, {
    clientId: '352332669171-nkct84k18ukddrqr6f2pas6vhlppvpmr.apps.googleusercontent.com'
})

app.mount('#app')
