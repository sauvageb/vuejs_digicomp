<script setup>
import data from "@/assets/tutorials.json";
import {computed, reactive, ref} from "vue";
import {useDateFormat} from '@vueuse/core'
import CommentList from "@/components/CommentList.vue";

const tutorials = reactive(data);
const showComments = ref([]);

const selectedSort = reactive({
  option: 'dateDesc'
});

const sortedTutorials = computed(() => {
  return [...tutorials].sort((a, b) => {
    if (selectedSort.option === 'dateDesc') {
      return new Date(b.createdAt) - new Date(a.createdAt); // Du plus récent au plus ancien
    } else if (selectedSort.option === 'dateAsc') {
      return new Date(a.createdAt) - new Date(b.createdAt); // Du plus ancien au plus récent
    } else if (selectedSort.option === 'titleAsc') {
      return a.title.localeCompare(b.title); // Tri par titre A-Z
    } else if (selectedSort.option === 'titleDesc') {
      return b.title.localeCompare(a.title); // Tri par titre Z-A
    }
    return 0;
  });
});

const printDate = (datetime) => computed(() => useDateFormat(datetime, 'dddd DD MMMM YYYY à HH:mm'));
</script>

<template>
  <h2>Liste des Tutoriels</h2>

  <div class="mb-3 mt-3">
    <label for="sortSelect" class="form-label">Trier par :</label>
    <select v-model="selectedSort.option" id="sortSelect" class="form-select">
      <option value="dateDesc">Date : du plus récent au plus ancien</option>
      <option value="dateAsc">Date : du plus ancien au plus récent</option>
      <option value="titleAsc">Titre : A-Z</option>
      <option value="titleDesc">Titre : Z-A</option>
    </select>
  </div>

  <div class="card mb-4" v-for="tutorial in sortedTutorials" :key="tutorial.id">
    <h5 class="card-header">
      {{ tutorial.title }} <span class="badge text-bg-success">{{ tutorial.category.name }}</span>
    </h5>
    <div class="card-body">
      <p class="card-title lead">{{ tutorial.description }}</p>
      <p class="card-text">{{ tutorial.content }}</p>

      <CommentList :comments="tutorial.comments"/>

    </div>
  </div>

</template>

<style scoped>
</style>
