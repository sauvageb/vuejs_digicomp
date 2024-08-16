<script setup lang="ts">
import {ref} from "vue";

const isShown = ref(false);

type Props = {
  comments: Comment[]
};
defineProps<Props>();

</script>
<template>
  <button type="button" :disabled="comments.length < 1" @click="isShown= !isShown"
          class="btn btn-primary position-relative mb-3">
    Voir les commentaires
    <span v-show="comments.length > 0"
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {{ comments.length }}
  </span>
  </button>

  <div v-if="isShown" class="list-group comments">
    <div v-for="comment in comments" :key="comment.id" class="list-group-item">
      <figure>
        <blockquote class="blockquote">
          <p>{{ comment.content }}</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          {{ comment.author.firstName }} {{ comment.author.lastName.toUpperCase() }}
        </figcaption>
      </figure>
    </div>
  </div>

</template>
