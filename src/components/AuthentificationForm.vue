<template>
    <div class="auth">
        <div class="auth-form">
            <form @submit.prevent="signIn">
                <h3 class="auth-form-heading">Sign in to Interno</h3>
                <p class="auth-form-text">Login {{ login }}</p>
                <input type="text" class="auth-form-text" v-model="login">
                <p class="auth-form-text">Password{{ password }}</p>
                <input type="password" class="auth-form-text" v-model="password">
                <p class="auth-form-error"> {{ error }}</p>
                <button type="submit" class="auth-form-submit auth-form-text">Login</button>
                <div class="auth-form-register">
                    <router-link to="register">Зарегистрироваться</router-link>
                </div>
                <!-- v-if="error" -->
            </form>
            <svg @click="closeAuthForm" class="auth-form-close" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AuthentificationForm',
    data() {
        return {
            login: '',
            password: '',
            error: ''
        }
    },
    methods: {
        closeAuthForm() {
            this.$emit('closeAuthForm');
        },

        async signIn() {
            try {
                const response = axios.post('/login', {
                    username: this.login,
                    password: this.password
                });
                alert('successful' + (await response).data.token) //перефдресация

            } catch (error) {
                this.error = error.response.data.message;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/_variables";

.center {
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
}

.auth {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: rgba(81, 85, 85, 0.788);

    &-form {
        width: 600px;
        border-radius: 30px;
        padding: 1px 20px 50px 35px;
        background-color: white;
        position: relative;
        top: 20%;
        margin: 0 auto;

        p {
            margin-bottom: 10px;
        }

        input {
            width: 90%;
            border: 3px solid rgb(214, 208, 208);
            border-radius: 10px;
            line-height: 40px;
            padding: 3px;
            box-sizing: border-box;
        }

        &-heading {
            color: #292F36;
            font-family: $fontSerif;
            font-size: 40px;
            font-weight: 400;
            letter-spacing: 1px;
            text-align: center;
            margin-bottom: 30px;
        }

        &-text {
            color: #4D5053;
            font-family: Jost;
            font-size: 22px;
            letter-spacing: 0.22px;
            text-decoration: none;
        }

        &-close {
            width: 20px;
            position: absolute;
            right: 10px;
            top: 10px;
            padding: 12px;
            border-radius: 5px;
            cursor: pointer;
        }

        &-submit {
            border: none;
            border-radius: 20px;
            letter-spacing: 2px;
            background-color: $colorBackGrey;
            width: 300px;
            display: block;
            padding: 10px 15px;
            margin: 40px auto 20px;
            cursor: pointer;
            transition: transform 0.1s ease-in;

            &:hover {
                transform: scale(1.05);
            }
        }

        &-register {
            text-align: center;

            a {
                text-decoration: none;
                color: $colorText;

            }

            transition: transform 0.1s ease-in;

            &:hover {
                transform: scale(1.02);
            }
        }

        &-error {
            color: rgb(216, 40, 40);
        }
    }
}
</style>