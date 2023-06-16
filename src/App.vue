<script setup>
import {computed} from 'vue'
import {useAuthStore} from './stores/auth'

const authStore = useAuthStore()

const token = computed(() => authStore.userInfo.token);

const checkUser = () => {
  const tokens = JSON.parse(localStorage.getItem('userTokens'));
  if (tokens) {
    authStore.userInfo.token = tokens.token
    authStore.userInfo.refreshToken = tokens.refreshToken
    authStore.userInfo.expiresIn = tokens.expiresIn
  }
  console.log(authStore.userInfo);
}

checkUser()
</script>

<template>
  <div class="menu">
    <router-link class="menu__link" to="/">Home</router-link>
    <router-link class="menu__link" to="/signin" v-if="!token">Login</router-link>
    <router-link class="menu__link" to="/cars" v-if="token">Cars</router-link>
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  font-family: 'Arial', sans-serif;
  max-width: 700px;
}
.menu {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 20px;
}

.menu__link {
  color: #000;
  margin: 0 20px;
  font-family: 'Arial', sans-serif;
}
</style>
