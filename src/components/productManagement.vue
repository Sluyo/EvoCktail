<script setup>
    import Card from './Card.vue'
    
    defineProps({
        id: {
            type: Number,
            required: true
        }
    })
</script>

<template>
  <div>
    <slot></slot>
    <button>{{ id }}</button>
  </div>
</template>

<style scoped lang="scss">
    div {
        display: flex;
        flex-direction: row;

        button {
            background: red;
            width: 70px;
            height: 30px;
            margin-top: 30%;
            cursor: pointer;
        }
    }
</style>