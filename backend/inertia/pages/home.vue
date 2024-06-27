<script lang="ts" setup>
import { Head } from '@inertiajs/vue3'
import {Inertia} from "@inertiajs/inertia";
import Navbar from "../../src/components/Navbar.vue";

defineProps<{ version: number }>()

async function logout() {
  await Inertia.post('/logout')
}

</script>

<template>
<v-app>
  <Head title="Homepage" />
  <Navbar/>
  <div class="container mx-auto px-4">
    <div class="text-4xl font-bold text-center my-8">AdonisJS {{ version }} x Inertia x Vue.js</div>
    <p class="text-lg">
      Learn more about AdonisJS and Inertia.js by visiting the
      <a href="https://docs.adonisjs.com/guides/inertia" class="text-blue-500 hover:underline">AdonisJS documentation</a>.
    </p>
    <button @click="logout">Logout</button>
  </div>
</v-app>
</template>
