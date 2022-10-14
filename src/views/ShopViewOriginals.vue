<script setup>
    import SearchBar from '../components/topBar.vue'
    import Card from '../components/Card.vue'
</script>

<template>  
    <SearchBar />
    <div class="products">

        <Card link="img/me.jpg" name="MATT THE BARMAN" :price="0.99"/>
        <Card link="img/him.jpg" name="QUENTIN THE BARMAN" :price="0.99"/>
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