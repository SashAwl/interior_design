<template>
    <div>
        <div class="center">
            <div class="top">
                <div class="top__content">
                    <h1 class="top__content-heading">Let Your Home Be Unique</h1>
                    <p class="top__content-text">
                        There are many variations of the passages of
                        lorem Ipsum from available, majority.
                    </p>
                    <router-link to="/project">
                        <button class="top__content-button">
                            Get Started
                            <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                                    stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </router-link>
                </div>
            </div>
            <FollowOurProject />
        </div>
        <div class="progress">
            <div class="progress-text center">
                <div class="progress-text-item" v-for="item in progress" :key="item.id">
                    <h1 class="number">{{ item.number }}</h1>
                    <p class="text">{{ item.text }}</p>
                </div>
            </div>
        </div>
        <ArticlesNews :settings="articlesNewsSettings" />
    </div>
</template>

<script>
import FollowOurProject from '../components/FollowOurProject.vue'
import ArticlesNews from '../components/ArticlesNews.vue'
import { mapState } from 'vuex'

export default ({
    name: 'HomePage',
    components: {
        FollowOurProject,
        ArticlesNews
    },
    data() {
        return {
            articlesNewsSettings: { // регулирует внешний вид компонента Articles&News на данной странице
                longText: true,
                alignHeading: { 'align-items': 'center' },
                isShowLatestNews: false,
                countCard: 3,
                isCardSlider: true
            },
        }
    },
    computed: {
        ...mapState(['progress'])
    }
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/__variables.scss";

.center {
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
}

.top {
    height: 758px;
    background-image: url(../assets/main/top_back.jpg);
    background-repeat: no-repeat;
    border-radius: 90px;
    background-size: cover;
    height: 758px;

    &__content {
        width: 434px;
        padding-top: 183px;
        padding-left: 50px;

        &-heading {
            color: $colorHeading;
            font-family: $fontSerif;
            font-size: 65px;
            line-height: 125%;
            margin-bottom: 21px;
        }

        &-text {
            color: $colorText;
            font-size: 22px;
            font-family: $fontSansSerif;
            line-height: 150%;
            letter-spacing: 0.22px;
        }

        &-button {
            border-radius: 18px;
            background: #292F36;
            padding: 26px 49px 26px 48px;
            box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
            display: flex;
            align-items: center;
            color: white;
            margin-right: 8px;
            text-align: center;
            font-size: 18px;
            font-family: $fontSansSerif;
            font-weight: 600;
            line-height: 125%;
            letter-spacing: 0.36px;
            cursor: pointer;
            transition: transform 0.1s ease-in;

            &:hover {
                transform: scale(1.05);
            }
        }

        &>a {
            text-decoration: none;
        }

        &[path] {
            fill: $colorBeige;
        }
    }
}

.progress {
    background-color: #F4F0EC;

    &-text {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        text-align: center;
        margin-top: 90px;
        padding-top: 150px;
        padding-bottom: 170px;
        box-sizing: border-box;

        &-item~&-item {
            border-left: 1px solid $colorBeige;
        }
    }

    .number {
        color: $colorBeige;
        font-family: $fontSerif;
        font-size: 85px;
        font-weight: 400;
        letter-spacing: 1.7px;
        margin: 0 auto 22px;
    }

    .text {
        color: $colorText;
        font-family: $fontSansSerif;
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 0.22px;
        margin-bottom: 0;
    }
}
</style>