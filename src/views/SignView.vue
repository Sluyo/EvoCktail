<script setup>
    import topBar from '../components/topBar.vue'
    import SignForm from '../components/signForm.vue'
    import {ref} from 'vue'

    const email = ref(null)
    const password = ref(null)

    const onSubmit = () => {
        console.log(email.value + " " + password.value)
    }
</script>

<template>
    <topBar />
    <div class="loginPage">
        <div class="form">
            <h1>
                Login
            </h1>
            <SignForm @submit.prevent="onSubmit">
                <label>
                    Email
                    <br><input v-model="email" type="email">
                </label>
                <label>
                    Password
                    <RouterLink to="/" class="link">forgot ?</RouterLink>
                    <br><input v-model="password" type="password">
                </label>
                <button type="submit">Create</button>
                <RouterLink to="/register" class="link">Create Account</RouterLink>
            </SignForm>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .loginPage {
        padding-top: 150px;
        width: 100%;
        height: 100vh;
        background: black;
        color: white;
        text-align: left;
        
        h1 {
            padding: 50px 0 40px 0;
            width: 400px;
            margin: auto;
            font-size: 50px;
        }

        form {

            label {
                padding: 10px 0 10px 0;

                .link {
                    text-decoration: none;
                    color: grey;
                    margin-left: 250px;
                }
            }

            .link {
                text-decoration: none;
                color: grey;
                margin-top: 20px;
            }
        }

        input {
            width: 400px;
            height: 35px;
            background: none;
            border: solid 1px rgb(62, 62, 62);
            color: white;
        }

        button {
            margin-top: 20px;
            padding: 10px 0 10px 0;
            width: 410px;
            background: none;
            color: white;
            cursor: pointer;
            border: 2px solid white;
        }
    }
</style>