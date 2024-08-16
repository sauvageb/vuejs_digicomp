<script setup lang="ts">
import type {Ref} from "vue";
import {computed, onMounted, reactive, ref} from "vue";
import CommentList from "@/components/CommentList.vue";
import {useDateFormat} from "@vueuse/core";
import tutorialService from "@/services/tutorial.service";
import type Tutorial from "@/models/tutorial.model";

const tutorials: Ref<Tutorial[]> = ref([]);

onMounted(async () => tutorials.value = await tutorialService.getAll())

const selectedSort = reactive({
  option: 'dateDesc'
});

const printDate = (datetime: Date) => computed(() => useDateFormat(datetime, 'dddd DD MMMM YYYY à HH:mm'));

const sortedTutorials = computed(() => {
  return [...tutorials.value].sort((a, b) => {
    if (selectedSort.option === 'dateDesc') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); // Du plus récent au plus ancien
    } else if (selectedSort.option === 'dateAsc') {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(); // Du plus ancien au plus récent
    } else if (selectedSort.option === 'titleAsc') {
      return a.title.localeCompare(b.title); // Tri par titre A-Z
    } else if (selectedSort.option === 'titleDesc') {
      return b.title.localeCompare(a.title); // Tri par titre Z-A
    }
    return 0;
  });
});

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

    <div class="card-footer bg-white text-muted">
      <small>Publié par <a :href="'mailto:' + tutorial.author.email">{{ tutorial.author.firstName }}
        {{ tutorial.author.lastName.toUpperCase() }}</a> à {{ printDate(tutorial.createdAt) }}</small>
    </div>

  </div>
</template>

<style scoped>
</style>
