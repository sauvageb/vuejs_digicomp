<script setup lang="ts">
import Navbar from "@/components/NavBar.vue";

console.log(import.meta.env.MODE)
console.log(import.meta.env.BASE_URL)
console.log(import.meta.env.PROD)
console.log(import.meta.env.DEV)
console.log(import.meta.env.SSR)

console.log(import.meta.env.VITE_APP_TITLE)


</script>

<template>
  <Navbar/>
  <div class="container">
    <RouterView/>
  </div>
</template>
