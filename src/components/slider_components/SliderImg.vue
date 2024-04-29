<template>
    <div class="wrapper">
        <div class="slim-slider">
            <div class="slider" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
                <SliderItem class="slider-item" v-for="item in  dataList" :key="item.id" :dataImgItem="item"
                    @openBigSlider="openCloseBigSlide" />
            </div>
            <div @click="getPrevious" class="arrow-block arrow-previous">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                        d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
            </div>
            <div @click="getNext" class="arrow-block arrow-next">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
            </div>
        </div>
        <div class="big-slider" ref="focusElement" tabindex="0" @keydown="executeCommand"
            :class="{ 'big-slider-show': isOpenedBigSlider }">
            <div class="big-slide">
                <div class="big-image" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
                    <SliderItem class="slider-item" v-for="item in  dataList" :key="item.id" :dataImgItem="item"
                        :isVisibleLoupe="isOpenedBigSlider" />
                </div>
                <div @click="getPrevious" class="arrow-block arrow-previous">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path
                            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                </div>
                <div @click="getNext" class="arrow-block arrow-next">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path
                            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>
                </div>
            </div>
            <svg @click="openCloseBigSlide" class="big-slider-close" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
        </div>
    </div>
</template>

<script>
import SliderItem from './SliderItem.vue';

export default {
    name: 'SliderImg',
    props: ['dataList', 'interval'],
    components: {
        SliderItem
    },
    data() {
        return {
            currentSlideIndex: 0,
            isOpenedBigSlider: false
        }
    },
    mounted() {
        if (this.interval > 0) {
            let context = this;
            setInterval(() => {
                context.getNext();
            }, context.interval)
        }
    },
    updated() {
        this.$refs.focusElement.focus();
    },
    methods: {
        getPrevious() {
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--;
            }
        },
        getNext() {
            if (this.currentSlideIndex >= this.dataList.length - 1) {
                this.currentSlideIndex = 0;
            }
            else {
                this.currentSlideIndex++;
            }
        },
        openCloseBigSlide() {
            this.isOpenedBigSlider = !this.isOpenedBigSlider;
        },
        executeCommand(event) {
            if (event.key === 'ArrowLeft') {
                this.getPrevious();
            }
            if (event.key === 'ArrowRight') {
                this.getNext();
            }
            if (event.key === 'Escape') {
                this.openCloseBigSlide();
            }
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../../assets/_variables";

.wrapper {

    .slim-slider {
        max-width: 861px;
        overflow: hidden;
        margin: 0 auto;
        position: relative;
        border-radius: 20px;

        .slider {
            display: flex;
            transition: all ease-in 0.5s;
        }
    }

    .big-slider {
        display: none;
        width: 100vw;
        height: 100vh;
        background-color: rgba(81, 85, 85, 0.788);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;

        &-show {
            display: block;
        }

        .big-slide {
            max-width: 1001px;
            overflow: hidden;
            margin: 0 auto;
            border-radius: 20px;
            position: relative;
            top: 50%;
            transform: translateY(-50%);

            .big-image {
                display: flex;
                transition: all ease-in 0.5s;
            }
        }

        &-close {
            width: 20px;
            position: fixed;
            right: 5px;
            top: 5px;
            padding: 12px;
            background-color: #f4f0ec8f;
            border-radius: 5px;
            cursor: pointer;
        }
    }

    .arrow-block {
        position: absolute;
        top: 0;
        height: 100%;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
            width: 30px;
            height: fit-content;
            padding: 9px 18px;
            background-color: rgba(244, 240, 236, 0.5607843137);
            border-radius: 30px;
        }

        &:hover {
            background-color: rgba(244, 240, 236, 0.5607843137);

            & svg {
                background-color: initial;
            }
        }
    }

    .arrow-next {
        right: 1px;
    }

    .arrow-previous {
        left: 0;
    }
}
</style>