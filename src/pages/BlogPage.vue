<template>
    <div>
        <TopBlock :topData="topData" />
        <div class="latest-post center">
            <h2 class="latest-post__heading">
                Latest Post
            </h2>
            <div class="content__description-text">
                <div class="latest-post__content">
                    <a href="#"><img :src="articles[articles.length - 1].src" alt="photo"></a>
                    <div class="content__description">
                        <h3 class="content__description-heading"><a href="#">{{ articles[articles.length - 1].headText
                                }}
                            </a></h3>
                        <div class="content__description-text">
                            <p v-html="articles[articles.length - 1].describeText"></p>
                        </div>
                        <div class="content__description-data">
                            <p class="content-data-number">{{ articles[articles.length - 1].data }} </p>
                            <a href="#"><svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                                    <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <ArticlesNews :settings="articlesNewsSettings" />
    </div>
</template>

<script>
import TopBlock from '../components/TopBlock.vue'
import ArticlesNews from '@/components/ArticlesNews.vue';
import { mapState } from 'vuex';

export default ({
    name: 'BlogPage',
    components: {
        TopBlock,
        ArticlesNews
    },
    data() {
        return {
            topData: {  // регулирует внешний вид компонента TopBlock для данной страницы
                visibility: true,
                link: "Blog",
                heading: "Articles & News",
                srcImg: require("../assets/BannerBlog.jpg")
            },
            articlesNewsSettings: {  // регулирует внешний вид компонента Articles&News на данной странице
                longText: false,
                alignHeading: { 'align-items': 'flex-start' },
                isShowLatestNews: true,
                countCard: 6
            }
        }
    },
    computed: {
        ...mapState(['articles'])
    }
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/_variables";

.center {
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
}

.latest-post {
    margin-top: 212px;

    &__heading {
        color: $colorHeading;
        font-size: 50px;
        font-family: $fontSerif;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &__content {
        padding: 22px;
        display: flex;
        gap: 65px;
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);

        & img {
            transition: transform 0.1s ease-in;
            border-radius: 46px;
        }

        & img:hover {
            transform: scale(1.02);
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        }

        .content__description {
            width: 463px;
            font-weight: 400;

            &-heading a {
                text-decoration: none;
                color: $colorHeading;
                font-size: 25px;
                font-family: $fontSerif;
                line-height: 125%;
                letter-spacing: 0.5px;
                transition: transform 0.1s ease-in;
            }

            &-heading:hover {
                transform: scale(1.02);
            }

            &-text {
                color: $colorText;
                font-size: 22px;
                font-family: $fontSansSerif;
                line-height: 150%;
                letter-spacing: 0.22px;
            }

            &-data {
                display: flex;
                justify-content: space-between;
                margin-top: 40px;
                color: $colorText;
                font-size: 16px;
                font-family: $fontSansSerif;
                line-height: 150%;
                letter-spacing: 0.16px;
                text-transform: capitalize;

                & svg {
                    cursor: pointer;
                    transition: transform 0.1s ease-in;
                }

                & svg:hover {
                    transform: scale(1.2);
                }
            }


        }
    }
}
</style>