<script setup lang="ts">
import type Category from "@/models/category.model";

const categories: Category[] = [
  {id: 1, name: 'Java'},
  {id: 2, name: 'Javascript'},
  {id: 3, name: 'Typescript'},
  {id: 4, name: 'VueJs'},
  {id: 5, name: 'C#'},
  {id: 6, name: 'Angular'},
  {id: 7, name: 'Ruby'},
  {id: 8, name: 'Python'},
  {id: 9, name: 'C++'},
  {id: 10, name: 'Rust'},
  {id: 11, name: 'VBA'}
];

const remove = (id: number) => {
  alert('removing cat' + id)
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
