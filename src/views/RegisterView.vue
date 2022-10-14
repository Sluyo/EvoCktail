<script setup>
    import topBar from '../components/topBar.vue'
    import SignForm from '../components/signForm.vue'
    import {ref} from 'vue'

    const name = ref(null);
    const email = ref(null);
    const password = ref(null);
    const confirmPpassword = ref(null);

    const onSubmit = () => {
        console.log(name.value + " " + email.value + " " + password.value)
    }

</script>

<template>
  <topBar />
  <div class="loginPage">
        <div class="form">
            <h1>
                Register
            </h1>
            <SignForm @submit.prevent="onSubmit">
                <label>
                    Name
                    <br><input v-model="name" type="text" required>
                </label>
                <label>
                    Email
                    <br><input v-model="email" type="email" required>
                </label>
                <label>
                    Password
                    <br><input v-model="password" type="password" minlength="8" pattern=".+@+\.@" required>
                </label>
                <button type="submit" class="signBtn">Register</button>
            </SignForm>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .loginPage {
        padding-top: 150px;
        width: 100%;
        height: 607px;
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