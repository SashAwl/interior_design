<template>
    <div>
        <TopBlock :topData="topData" />
        <div class="full-articles center" id="appArticles">
            <div class="full-articles__list">
                <component v-for="item in filter" :is="item.name" :key="item.id"></component>
            </div>
            <div class="full-articles__tegs">
                <h5 class="tegs__heading">
                    Tags
                </h5>
                <div class="full-articles__tegs-block">
                    <button @click="getFilter(teg)" v-for="teg in tegsBlog" :key="teg.id"
                        class='full-articles__tegs-block-item' :class="{ 'checked-teg': teg.tegChecked }">{{ teg.name
                        }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopBlock from '../components/TopBlock.vue';
import KitchenArticleFull from '../components/articles_full_components/KitchenArticleFull.vue';
import PlanningKitchenArticleFull from '../components/articles_full_components/PlanningKitchenArticleFull.vue';
import ArchitectureArticleFull from '../components/articles_full_components/ArchitectureArticleFull.vue';
import BuildingArticleFull from '../components/articles_full_components/BuildingArticleFull.vue';
import BedroomArticleFull from '../components/articles_full_components/BedroomArticleFull.vue';
import Bedroom2ArticleFull from '../components/articles_full_components/Bedroom2ArticleFull.vue';
import { mapState } from 'vuex';

export default {
    name: 'BlogDetailsPage',
    components: {
        TopBlock,
        KitchenArticleFull,
        PlanningKitchenArticleFull,
        ArchitectureArticleFull,
        BuildingArticleFull,
        BedroomArticleFull,
        Bedroom2ArticleFull
    },
    data() {
        return {
            topData: {  // регулирует внешний вид компонента TopBlock для данной страницы
                visibility: false,
                link: "",
                heading: "",
                srcImg: require("../assets/BannerBlog.jpg")
            },
            filter: [  // хранит отфильтрованный на текщий момент список
                { name: 'KitchenArticleFull', teg: 'Kitchen' },
                { name: 'PlanningKitchenArticleFull', teg: 'Kitchen Planning' },
                { name: 'ArchitectureArticleFull', teg: 'Architecture' },
                { name: 'BuildingArticleFull', teg: 'Building' },
                { name: 'BedroomArticleFull', teg: 'Bedroom' },
                { name: 'Bedroom2ArticleFull', teg: 'Bedroom' }
            ]
        }
    },
    computed: {
        ...mapState(['articlesFull', 'tegsBlog'])
    },
    methods: {  // фильтрует данные на странице
        getFilter(teg) {
            this.tegsBlog.forEach(itemTeg => { itemTeg.tegChecked = false });
            teg.tegChecked = true;
            if (teg.name === 'All') {
                this.filter = this.articlesFull
            } else {
                this.filter = this.articlesFull.filter((item) => item.teg === teg.name)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/__variables.scss";

.center {
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
}

.full-articles {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 52px;
    margin-top: 100px;

    .full-articles__tegs {
        .tegs__heading {
            color: $colorHeading;
            font-size: 25px;
            font-family: $fontSerif;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
            margin-top: 0;
            margin-bottom: 24px;
        }

        .full-articles__tegs-block {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            &-item {
                color: $colorHeading;
                text-align: center;
                font-size: 18px;
                font-family: $fontSansSerif;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 0.36px;
                border: none;
                border-radius: 10px;
                background: #F4F0EC;
                padding: 9px 30px;
                cursor: pointer;
            }
        }

        .checked-teg {
            background-color: #292F36;
            color: #FFF
        }
    }

    .articles__list-item {

        .item__heading {
            color: $colorHeading;
            font-size: 50px;
            font-family: $fontSerif;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 1px;
            margin: 0;
        }

        .item__text {
            color: $colorText;
            font-size: 22px;
            font-family: $fontSansSerif;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;

            ol {
                color: $colorBeige;

                li~li {
                    margin-top: 24px;
                }

                span {
                    color: $colorText;
                }
            }
        }

        .item__nav {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
        }

        .item__nav-link>a {
            text-decoration: none;
            color: $colorText;
        }

        .item__img {
            border-radius: 60px;
            width: 100%;
            margin-top: 14px;
            margin-bottom: 14px;
        }

        .item__high-text {
            border-radius: 50px;
            background: #F4F0EC;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 47px;
            margin-bottom: 47px;


            .text-block {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: $colorBeige;
                text-align: center;
                font-size: 25px;
                font-family: $fontSerif;
                font-style: italic;
                font-weight: 400;
                letter-spacing: 0.5px;
                gap: 10px;
                width: 354px;
                padding-bottom: 53px;

                &>p:first-child {
                    font-size: 200px;
                    letter-spacing: 4px;
                    margin-bottom: -165px;
                    margin-top: 0;
                }
            }
        }
    }

    .articles__list-item~.articles__list-item {
        margin-top: 130px;
    }
}
</style>