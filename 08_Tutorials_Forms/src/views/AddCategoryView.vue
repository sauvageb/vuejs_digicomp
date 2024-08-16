<template>
  <div class="row justify-content-center">
    <form class="col-lg-6 mb-5" @submit.prevent="createCategory">
      <h1>Nouvelle catégorie</h1>
      <div class="form-group mt-3">
        <label for="category">Nom</label>
        <input id="category" type="text" class="form-control" v-model="formData.categoryName" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Ajouter</button>
    </form>
  </div>
</template>


<script setup lang="ts">

import {ref} from "vue";
import categoryService from "@/services/category.service";
import router from "@/router";

const formData = ref({
  categoryName: ''
});

const createCategory = async () => {
  await categoryService.create({name: formData.value.categoryName.trim()});
  await router.push({name: 'categories'})
}

</script>
