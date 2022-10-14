<script setup>
    import SearchBar from '../components/topBar.vue'
    import Card from '../components/Card.vue'
</script>

<template>  
    <SearchBar />
    <div class="products">
        <Card link="img/Laink_Dégout.png" name="LAINK DEGOUT" :price="20.99"/>
        <Card link="img/Laink_Gros.png" name="LAINK GROS" :price="25.99"/>
        <Card link="img/Laink_Pervert.png" name="LAINK PERVERT" :price="29.99"/>
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
        height: auto;
        padding-top: 150px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>