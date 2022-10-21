<script setup>
    import topBar from '../components/topBar.vue'
    import Card from '../components/Card.vue'
    import {ref} from 'vue'
    import products from '../assets/product.json'

    const drinks = ref(products);
    const isAdmin = ref(true);
    const title = ref(null);
    const $ = ref(null);
    const path = ref(null);
    const type = ref(null);
    const desc = ref(null)

    const addProduct = () => {
        drinks.value.push({name: title.value, price: $.value, link: path.value, type: type.value, description: desc.value});
    }

    const deleteProduct = (name) => {
        let product = drinks.value.findIndex(e => e.name === name);
        drinks.value.splice(product,1);
    }
</script>

<template>
    <topBar />
    <div v-if="isAdmin" class="adminPage">
        <div class="manage manageProducts">
            <input type="text" placeholder="Search product">
            <div class="toManage" v-for="drink in drinks" :key="drink.name">
                <Card :link=drink.link :name=drink.name :price=drink.price />
                <button class="edit">Edit</button>
                <button class="delete" @click="deleteProduct(drink.name)">Delete</button>
            </div>
        </div>
        <div class="manage">
            <form @submit.prevent="addProduct">
                <label>
                    name
                    <input v-model="title" type="text">
                </label>
                <br><label>
                    price
                    <input v-model="$" type="number">
                </label>
                <br><label>
                    path
                    <input v-model="path" type="text">
                </label>
                <br><label>
                    type
                    <input v-model="type" type="text">
                </label>
                <br><label>
                    description
                    <input v-model="desc" type="textarea">
                </label>
                <br><button type="submit">Add product</button>
            </form>
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
            width: 320px;
            margin-bottom: 10px;
            background-color: #292727;
            border: none;
            color: white;
        }

        .manage {
            height: auto;
            width: 33%;
            color: white;
        }

        .toManage {
            display: flex;
            flex-direction: row;

            .edit {
                background: green;
                width: 70px;
                height: 30px;
                margin-top: 30%;
                cursor: pointer;
            }

            .delete {
                background: red;
                width: 70px;
                height: 30px;
                margin-top: 30%;
                cursor: pointer;
            }
        }

        .manageAdmins {
            overflow-y: scroll;
        }
    }
</style>