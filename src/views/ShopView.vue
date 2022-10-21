<script setup>
    import SearchBar from '../components/topBar.vue'
    import Card from '../components/Card.vue'
    import {ref} from 'vue'
    import products from '../assets/product.json'

    const drinks = ref(products)
</script>

<template>  
    <SearchBar />
    <div class="products">
        <Card v-for="drink in drinks" :key="drink.name" :link=drink.link :name=drink.name :price=drink.price :description=drink.description />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .products {
        background: black;
        width: 100%;
        height: auto;
        padding-top: 150px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>