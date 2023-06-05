import "primevue/resources/themes/lara-light-indigo/theme.css"
import "primevue/resources/primevue.min.css"
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app"
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyCUYdawfZJ6kUdc2YGrjLtJesZ39Nn3Tbk",
  authDomain: "jwt-firebase-vue3.firebaseapp.com",
  projectId: "jwt-firebase-vue3",
  storageBucket: "jwt-firebase-vue3.appspot.com",
  messagingSenderId: "639394322703",
  appId: "1:639394322703:web:92f6d932828b11f067c67a"
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')