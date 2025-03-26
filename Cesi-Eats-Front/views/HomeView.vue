<script setup lang="ts">

import InputText from "primevue/inputtext";
</script>

<template>
  <div class="d-flex justify-content-left align-items-left">
    <div class="text-black font-semibold text-left border-3 inline-block p-2 m-2 rounded-4xl">Bonjour utilisateur</div>
    <div class="text-black w-full p-2">
      <h1 class="font-bold">Bienvenue sur <span class="bronze-cesieats">CESI Eats</span></h1>
      <div class="pl-1 opacity-50">Mangez ce que vous voulez (tout en restant en pyjama) !</div>
      <div class="flex justify-center">
        <div class="mt-3 p-2 text-black border-3 rounded-4xl border-orange-500 inline-flex justify-center">
        <span class="self-center ml-4 mr-4">
          <InputText id="adress" type="text" placeholder="Entrez votre adresse..." class="w-full m-1 bronze-cesieats placeholder-cesieats"/>
        </span>
          <span>
          <button class="bg-orange-400 button-cesieats">Rechercher</button>
        </span>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

.placeholder-cesieats::placeholder {
  color: #FA8231;
  opacity: 75%;
  font-weight: bold;
}

</style>