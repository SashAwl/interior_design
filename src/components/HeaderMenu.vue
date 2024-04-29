<template>
    <div class="header">
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
        </nav>
    </div>
</template>

<script>
export default {
    name: 'HeaderSite.vue'
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
        }

        &-item~&-item {
            margin-left: 15px;
        }
    }
}
</style>