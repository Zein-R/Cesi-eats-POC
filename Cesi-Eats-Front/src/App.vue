<script setup lang="ts">
</script>

<template>
  <div class="app bg-white">
    <div class="d-flex justify-content-between align-items-center">
      <div class="navbar">
        <img src="./assets/cesi-eats-logo.jpg" class="h-10">
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link to="/restaurants" class="nav-link">Restaurants</router-link>
        <router-link to="/cart" class="nav-link">Panier</router-link>
        <router-link to="/login" class="nav-link ml-auto">Se connecter</router-link>
      </div>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>

h1 {
  text-align: center;
  font-size: 2rem;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

 .app {
   min-height: 100vh;
 }

.navbar {
  padding: 1rem;
  display: flex;
  justify-content: left;
  gap: 2rem;
}

.nav-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.nav-link:hover {
  background-color: #34495e;
}

.nav-link.router-link-active {
  background-color: #FA8231;
}

.main {
  padding: 20px;
}
</style>