<script setup lang="ts">
import type Ref from "vue";
import {onMounted, ref} from "vue";
import categoryService from "@/services/category.service";
import type Category from "@/models/category.model";
import {useFetch} from "@vueuse/core";

const categories: Ref<Category[]> = ref([]);
onMounted(async () => {
  categories.value = await categoryService.getAll();
})

const remove = (id: number) => {
  const {data, error} = useFetch('http://localhost:3000/categories').delete();
  categories.value = data;
}
</script>

<template>
  <div class="container">
    <h1>Catégories</h1>
    <div class="container mt-5">
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="category in categories"
            :key="category.id">
          {{ category.name }}
          <div>
            <RouterLink :to="{name: 'category-details', params: {id: category.id} }"
                        class="btn btn-primary btn-sm me-2">Détails
            </RouterLink>
            <RouterLink to="" class="btn btn-warning btn-sm me-2">Éditer</RouterLink>
            <button @click="remove(category.id)" class="btn btn-danger btn-sm">Supprimer</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
