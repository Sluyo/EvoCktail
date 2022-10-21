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
    },
    description: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="card">
    <div class="desc">
      {{description}}
    </div>
    <img v-bind:src=link>
    <br>{{ name }}
    <br>{{ price }}$
    <button>Add to Cart</button>
  </div>
</template>

<style scoped lang="scss">
  .card {
    height: 500px;
    width: 420px;
    color: white;
    font-size: x-large;

    button {
      border: solid 2px white;
      background: none;
      color: white;
      height: 35px;
      margin-left: 38%;
      cursor: pointer;
    }

    img {
      height: 400px;
      width: 325px;
      background: white;
    }

    .desc {
      position: absolute;
      z-index: 3;
      width: 325px;
      height: 400px;
      display: none;
      white-space: pre;
    }
  }

  .card:hover {
    .desc {
      background-color: rgba(68, 68, 68, 0.873);
      display: block;
    }
  }
</style>