<template>
  <div class="-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 ">
    <div class=" shadow-2xl border-1 m-1 rounded-2xl border-orange-200 bg-orange-100bg -surface-0 dark:bg-surface-900 p-6 rounded-border w-full lg:w-6/12 mx-auto ">
      <div class="text-left mb-10 mt-4 ">
        <div class="text-black dark:text-surface-0 text-3xl font-medium mb-4">Se connecter</div>
      </div>

      <div>
        <label for="email1" class="text-black dark:text-surface-0 font-medium block ml-1.5 mb-1">Adresse email</label>
        <div class=" text-black border-3 rounded-2xl border-orange-500"><InputText id="email1" type="text" placeholder="xyz@example.com" class="w-full m-1 opacity-25 mb-2 ml-3" /></div>

        <label for="password1" class="text-black dark:text-surface-0 font-medium block ml-1.5 pt-2 mb-1">Mot de passe</label>
        <div class="text-black border-3 rounded-2xl border-orange-500"><InputText id="password1" type="password" placeholder="Mot de passe" class="w-full m-1 opacity-25 mb-2  ml-3"/></div>

        <div class=" underline text-orange-500 justify-between mt-3 mb-6">
          <a class="font-weight no-underline ml-2 text-primary cursor-pointer mb-2">Mot de passe oublié ?</a>
        </div>

      </div>
      <div class="text-center mt-4">
        <button class="font-medium no-underline ml-2 text-primary w-7/12 cursor-pointer button-cesieats">Se connecter</button>
      </div>

      <div class="text-center mt-8">
        <span class="text-black dark:text-surface-200 font-medium leading-normal opacity-50">Pas encore inscrit ?</span>
      </div>

      <div class="flex justify-center p-3">
        <router-link to="/sign" class="text-white button-cesieats w-7/12 p-3 rounded-3xl text-center  router-link-active " > S'inscrire</router-link>
      </div>

      <div class="flex justify-center">
        <div class="flex-row justify-between text-center">


          <div class="mt-2">
            <span class="text-black">En vous connectant, vous confirmez accepter notre politique <br> de confidentialité, nos conditions d’utilisation et <br> notre politique en matière de cookies.</span>
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