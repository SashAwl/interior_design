<template>
    <div class="auth">
        <div class="auth-form">
            <form @submit.prevent="signIn">
                <h3 class="auth-form-heading">Sign in to Interno</h3>
                <p class="auth-form-text">Login</p>
                <input type="text" class="auth-form-text" @input="error = ''" v-model="login">
                <p class="auth-form-text">Password</p>
                <label class="password-label" for="passwordEye">
                    <input :type="changePasswordType" class="auth-form-text" id="passwordEye" v-model="password"
                        @input="error = ''">
                    <svg class="password-eye" @click="toggleVisibilityButton" v-if="isVisiblePassword"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path
                            d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                    </svg>
                    <svg class="password-eye" @click="toggleVisibilityButton" v-else xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512">
                        <path
                            d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                    </svg>
                </label>
                <p class="auth-form-error">{{ error }}</p>
                <button type="submit" class="auth-form-submit auth-form-text">Login</button>
                <div class="auth-form-register">
                    <router-link to="register">Зарегистрироваться</router-link>
                </div>
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
            error: '',
            isVisiblePassword: false
        }
    },
    computed: {
        changePasswordType() {
            return this.isVisiblePassword ? "text" : "password";
        },
    },
    methods: {
        closeAuthForm() {
            this.$emit('closeAuthForm');
        },

        toggleVisibilityButton() {
            this.isVisiblePassword = !this.isVisiblePassword;
        },

        async signIn() {
            try {
                const response = axios.post('/login', {
                    username: this.login,
                    password: this.password
                });
                alert('successful ' + (await response).data.token);
                setTimeout(() => this.closeAuthForm(), 1000);

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

    .password-label {
        display: block;
        position: relative;
    }

    .password-eye {
        width: 35px;
        position: absolute;
        right: 75px;
        bottom: 11px;
        cursor: pointer;

        & path {
            fill: #afafaf;
        }
    }
}
</style>