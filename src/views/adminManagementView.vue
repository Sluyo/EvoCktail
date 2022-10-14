<script setup>
    import topBar from '../components/topBar.vue'
    import Card from '../components/Card.vue'
    import productManage from '../components/productManagement.vue'
    import {ref} from 'vue'

    const isAdmin = ref(true);
</script>

<template>
    <topBar />
    <div v-if="isAdmin" class="adminPage">
        <div class="manage manageProducts">
            <input type="text" placeholder="Search product">
            <productManage>
                <Card link="img/Laink_Gros.png" name="LAINK GROS" :price="25.99"/>
            </productManage>
        </div>
        <div class="manage manageAdmins">
            <input type="text" placeholder="Search user">
            <ul>
                <li>user 1</li>
                <li>user 2</li>
            </ul>
        </div>
    </div>
    <div v-else class="adminPage">
        You don't have access to this page
    </div>
</template>

<style scoped lang="scss">

    .adminPage {
        padding-top: 150px;
        color: white;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background: black;

        input {
            height: 40px;
            width: 400px;
            background-color: #292727;
            border: none;
            color: white;
        }

        .manage {
            height: 607px;
            width: 33%;
            color: white;
        }

        .manageAdmins {
            overflow-y: scroll;
        }
    }
</style>