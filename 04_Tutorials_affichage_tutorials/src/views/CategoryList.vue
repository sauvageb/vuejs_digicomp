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
</script>

<template>
  <div class="container">
    <h1>Catégories</h1>
    <div class="col-6 mb-3">
      <div class="row">
        <div class="card mb-3" v-for="category in categories" :key="category.id">
          <div class="card-body">
            {{ category.id }} {{ category.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
