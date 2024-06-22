<template>
    <header class="header">
        <div class="header__logo">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                    fill="#CDA274" />
            </svg>
            <routerLink to="/" class="toHome">Interno</routerLink>
        </div>
        <nav class="header__nav">
            <router-link to="/" class="header__nav-item">Home</router-link>
            <router-link to="/project" class="header__nav-item">Project</router-link>
            <router-link to="/blog" class="header__nav-item">Blog</router-link>
            <router-link to="/favorite-projects" class="header__nav-item"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg></router-link>
            <div class="header__nav-item">
                <svg @click="login" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderSite.vue',
    data() {
        return {

        }
    },
    methods: {
        login() {
            this.$emit("logIn");
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/_variables";

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 44px;
    padding-bottom: 44px;

    &__logo {
        display: flex;
        align-items: center;
        transition: transform 0.1s ease-in;

        &:hover {
            transform: scale(1.02);
        }
    }

    .toHome {
        text-decoration: none;
        color: $colorHeading;
        font-family: $fontSerif;
        text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        font-size: 40px;
        line-height: 125%;
        margin-left: 8px;
    }

    &__nav {
        display: flex;
        align-items: center;

        &-item {
            text-decoration: none;
            color: $colorHeading;
            font-family: $fontSansSerif;
            text-align: center;
            font-size: 20px;
            transition: transform 0.1s ease-in;

            &:hover {
                transform: scale(1.02);
            }

            svg {
                width: 25px;
                cursor: pointer;

                path {
                    fill: #808080a1;
                }

                &:hover {
                    transform: scale(1.1);
                }
            }
        }

        &-item~&-item {
            margin-left: 15px;
        }
    }
}
</style>