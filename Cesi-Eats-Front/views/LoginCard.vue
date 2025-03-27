<template>
  <div class="-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 ">
    <div class=" shadow-2xl m-1 border-2 rounded-2xl :border-orange-200 bg-orange-100bg -surface-0 dark:bg-surface-900 p-6 rounded-border w-full lg:w-6/12 mx-auto ">
      <div class="text-left mb-10 mt-4 ">
        <div class="text-black dark:text-surface-0 text-3xl font-medium mb-4">Se connecter</div>
      </div>

      <div>
        <label for="email1" class="text-black dark:text-surface-0 font-medium block ml-1.5 mb-1">Adresse email</label>
        <div class=" text-black border-3 rounded-2xl border-orange-500"><InputText id="email1" type="text" placeholder="xyz@example.com" class="w-full m-1 opacity-25 mb-2" /></div>

        <label for="password1" class="text-black dark:text-surface-0 font-medium block ml-1.5 pt-2 mb-1">Mot de passe</label>
        <div class="text-black border-3 rounded-2xl border-orange-500"><InputText id="password1" type="password" placeholder="Mot de passe" class="w-full m-1 opacity-25 mb-2"/></div>

        <div class=" underline text-orange-500 justify-between mt-3 mb-6">
          <a class="font-weight no-underline ml-2 text-primary cursor-pointer mb-2">Mot de passe oublié ?</a>
        </div>

      </div>
      <div class="text-right mt-4">
        <button class="font-medium no-underline ml-2 text-primary cursor-pointer button-cesieats">Se connecter</button>
      </div>
      <div class="flex justify-center">
        <div class="flex-row justify-between text-center">
          <div>
          <span class="text-black dark:text-surface-200 font-medium leading-normal">Pas encore inscrit ?</span>
          </div>

          <div class="flex justify-center p-3 mt-3">
            <router-link label="Sign In" icon="pi pi-user !text-xl !leading-none" class=" text-white bg-orange-400 w-2xs p-3 rounded-3xl text-center  router-link-active " to="/sign"> S'inscrire</router-link>
          </div>

          <div class="mt-2">
            <span>En vous connectant, vous confirmez accepter notre politique <br> de confidentialité, nos conditions d’utilisation et <br> notre politique en matière de cookies.</span>
          </div>
        </div>
      </div>


      </div>
    </div>

</template>

<script setup>
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';

import { ref } from 'vue';

const checked1 = ref(true);
</script>

<style>
.placeholder {
  color: black;
}
</style>