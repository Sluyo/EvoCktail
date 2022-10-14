<script setup>
  defineProps({
    link: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  })
</script>

<template>
  <div class="card">
    <img v-bind:src=link>
    <br>{{ name }}
    <br>{{ price }}$
  </div>
</template>

<style scoped lang="scss">
  .card {
    height: 500px;
    width: 420px;
    color: white;
    font-size: x-large;


    img {
      height: 400px;
      width: 325px;
      background: white;
    }
  }
</style>