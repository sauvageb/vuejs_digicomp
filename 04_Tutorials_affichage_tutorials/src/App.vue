<script setup lang="ts">
import TutorialList from "@/views/TutorialList.vue";
</script>

<template>
  <header data-bs-theme="dark" class="mb-3">
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a href="#" class="navbar-brand d-flex align-items-center">

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               class="bi bi-bookmark-heart-fill me-2" viewBox="0 0 16 16">
            <path
                d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
          </svg>
          <strong>Tutorials</strong>
        </a>
      </div>
    </div>
  </header>

  <div class="container">
    <TutorialList/>
  </div>
</template>

<style scoped>
</style>
