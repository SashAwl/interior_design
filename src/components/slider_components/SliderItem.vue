<template>
    <div class="slider-item">
        <img :src="require('../../assets/carousel/' + dataImgItem.imgSrc)" alt="photo"
            :class="{ 'big-image': isVisibleLoupe }">
        <svg @click="getLargerImg" v-if="!isVisibleLoupe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'SliderItem',
    props: ['dataImgItem', 'isVisibleLoupe'],
    methods: {
        getLargerImg() {
            this.$emit('openBigSlider');
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../../assets/_variables";

.slider-item {
    position: relative;

    &:first-child {
        padding-left: -1px;
    }

    &~& {
        padding-left: 1px;
    }

    img {
        border-radius: 20px;
        width: 860px;
    }

    .big-image {
        width: 1000px;
    }

    svg {
        display: none;
        width: 30px;
        position: absolute;
        padding: 20px;
        background-color: #FFFFFF;
        left: 50%;
        top: 45%;
        border-radius: 40px;
        transition: transform 0.1s ease-in;
        cursor: pointer;

        path {
            fill: $colorBeige;
        }

        &:hover {
            transform: scale(1.2);
        }
    }

    &:hover svg {
        display: block;
    }
}
</style>