<template>
    <div>
        <TopBlock :topData="topData" />
        <BackButton class="center indent-back-button" />
        <div class="center">
            <div class="content">
                <h3 class="content_heading">{{ projectDetails.heading }}</h3>
                <p class="content_text" v-for="paragraph in projectDetails.text" :key="paragraph.id">{{ paragraph }}</p>
            </div>
            <SliderImg :dataList="sliderImgList" :interval="sliderInterval" />
        </div>
    </div>
</template>

<script>
import TopBlock from '../components/TopBlock.vue';
import BackButton from '@/components/BackButton.vue';
import { mapMutations, mapState } from "vuex";
import SliderImg from '../components/slider_components/SliderImg.vue';


export default {
    name: 'PageProjectDetails',
    data() {
        return {
            topData: {
                visibility: false,
                link: "Project",
                heading: "Our Project",
                srcImg: require("../assets/Banner1.jpg")
            },
            sliderInterval: 4000
        }
    },
    components: {
        TopBlock,
        SliderImg,
        BackButton
    },
    computed: {
        ...mapState(['projectDetails', 'sliderImgList'])
    },
    methods: {
        ...mapMutations([])
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/_variables";

.center {
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
}

.indent-back-button {
    margin-top: 90px;
}

.content {
    width: 658px;
    margin: 50px auto 80px;

    &_heading {
        color: $colorHeading;
        font-family: $fontSerif;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &_text {
        color: $colorText;
        font-family: $fontSansSerif;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }
}

.carousel {
    margin: 0 auto;
    width: 800px;

    .slide {
        border-radius: 30px;
        height: 500px;

        .slide+.slide {
            margin-left: 10px;
        }
    }
}

.center {
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
}
</style>