<template>
    <div class="header">
        <div class="header__logo">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                    fill="#CDA274" />
            </svg>
            <span>Interno</span>
        </div>
        <nav class="header__nav">
            <span class="header__nav-item">Home</span>
            <span class="header__nav-item">Project</span>
            <span class="header__nav-item">Blog</span>
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
    }

    &__logo>span {
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
            font-family: Jost;
            line-height: 125%;
        }

        &-item~&-item {
            margin-left: 15px;
        }
    }
}
</style>