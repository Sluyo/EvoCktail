<script setup>
    import SearchBar from '../components/topBar.vue'
    import Card from '../components/Card.vue'
</script>

<template>  
    <SearchBar />
    <div class="products">
        <Card link="img/Laink_Pervert.png" name="LAINK PERVERT" :price="29.99"/>
 
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
        min-height: 100vh;
        max-height: auto;
        padding-top: 150px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>