<template>
    <div class="top-articles" :style="changeBackground(topData.srcImg)">
        <div class="top-articles__text" v-if="topData.visibility">
            <div>{{ topData.heading }}</div>
            <nav>
                <router-link to="/">Home</router-link> /
                <a>{{ topData.link }}</a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBlock',
    props: ['topData'],
    methods: {
        changeBackground(img) {
            return {
                'background-image': `url(${img})`
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/_variables";

.top-articles {
    // background-image: url(../assets/Banner.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 345px;
    position: relative;

    &__text {
        border-radius: 37px 37px 0px 0px;
        background: #FFF;
        display: flex;
        width: 503px;
        padding: 41px 15px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);

        &>div:first-child {
            color: $colorHeading;
            font-family: $fontSerif;
            font-size: 50px;
            font-weight: 400;
            line-height: 125%;
        }

        & a {
            text-decoration: none;
            color: $colorText;
            font-size: 22px;
            font-family: $fontSansSerif;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;
        }
    }
}
</style>
