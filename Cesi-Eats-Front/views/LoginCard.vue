<template>
  <div class="-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 ">
    <div class=" m-1 rounded-lg border-2 border-orange-200 bg-orange-100bg -surface-0 dark:bg-surface-900 p-6 shadow rounded-border w-full lg:w-6/12 mx-auto ">
      <div class="text-left mb-10 mt-4 ">
        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Se connecter</div>
        <span class="text-surface-600 dark:text-surface-200 font-medium leading-normal">Pas de compte ?</span>
        <a class="font-medium no-underline ml-2 text-primary cursor-pointer">Créer un compte</a>
      </div>

      <div>
        <label for="email1" class="text-surface-900 dark:text-surface-0 font-medium mb-2 block">Adresse email</label>
        <div class="border-3 rounded-2xl border-orange-500"><InputText id="email1" type="text" placeholder="Adresse email" class="w-full mb-4 m-1 " /></div>

        <label for="password1" class="text-surface-900 dark:text-surface-0 font-medium mb-2 block">Mot de passe</label>
        <div class="border-3 rounded-2xl border-orange-500"><InputText id="password1" type="password" placeholder="Mot de passe" class="w-full mb-4 m-1"/></div>

        <div class="flex items-center justify-between mb-12">
          <a class="font-weight no-underline ml-2 text-primary cursor-pointer ">Mot de passe oublié ?</a>
        </div>

        <router-link label="Sign In" icon="pi pi-user !text-xl !leading-none " class="nav-link w-full nav-link ml-auto" to="/sign"> Se connecter</router-link>
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