<template>
    <div>
        <TopBlock :topData="topData" />
        <div class="center">
            <div class="content">
            <h3 class="content_heading">{{ projectDetails.heading }}</h3>
            <p class="content_text" v-for="paragraph in projectDetails.text" :key="paragraph.id">{{ paragraph}}</p>
        </div>
        </div>
        <carousel class="carousel center">
            <slide v-for="img in carouselImg" :key="img.id">
                <img class="slide" :src='img' alt="photo">
            </slide>
        </carousel>
    </div>
</template>

<script>
import TopBlock from './TopBlock.vue'
import { mapMutations, mapState } from "vuex"
import { Carousel, Slide } from 'vue-carousel'


export default {
    name: 'PageProjectDetails',
    data () {
        return {
            topData: {
                visibility: false,
                link:"Project",
                heading:"Our Project",
                srcImg: require("../assets/Banner1.jpg")
            },
            carouselImg: [
                require('../assets/carousel/img1.4.jpg'),
                require('../assets/carousel/img1.5.jpg'),
                require('../assets/carousel/img1.1.jpg')
            ]
        }
    },
    components: {
        TopBlock,
        Carousel,
        Slide
    },
    computed: {
        ...mapState(['projectDetails'])
    },
    methods:{
        ...mapMutations([])
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/_variables";
    .content{
        width: 658px;
        margin: 130px auto 80px;

        &_heading{
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
        .slide{
        border-radius: 30px;
        height: 500px;

        .slide+.slide{
            margin-left: 10px;
        }
    }
    }
    .center {
        padding-left: calc(50% - 580px);
        padding-right: calc(50% - 580px);
    }
</style>