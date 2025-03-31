<script setup lang="ts">
</script>


<template>
  <div class="app bg-white">
    <div class="d-flex justify-content-between align-items-center">
      <div class="navbar shadow-xl">
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

  <footer class=" relative mt-40 bg-orange-200 pt-8 pb-6">
    <div class="container  mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl fonat-semibold text-blueGray-700">Gardons contact !</h4>
          <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
            Nous répondons en 1 à 2 jours ouvrés.
          </h5>

        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Liens utiles</span>
              <ul class="list-unstyled">
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">A propos de nous</a>
                </li>
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                </li>
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                </li>
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Products Gratuits</a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Ressources</span>
              <ul class="list-unstyled">
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Termes &amp; Conditions</a>
                </li>
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Politique de confidentialité</a>
                </li>
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contactez nous</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300">
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2021</span><a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank"> Notus JS by </a>
            <a href="https://www.creative-tim.com?ref=njs-profile" class="text-blueGray-500 hover:text-blueGray-800">Racailles Team</a>.
          </div>
        </div>
      </div>
    </div>
  </footer>
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

.main {
  padding: 20px;
}

</style>