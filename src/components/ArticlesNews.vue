<template>
    <div class="center">
        <div class="articles"  :style="settings.alignHeading">
            <router-link to="/blog-details" class="articles__heading">
                Articles & News
            </router-link>
            <p class="articles__text" v-if="settings.longText">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
            <div class="articles__cards" id='app'>
                <div class="articles__card" v-for="article in articles.slice(0,settings.countCard)" :key="article.id">
                    <div class="card-img">
                        <img :src="article.src" alt="photo">
                        <p>{{article.type}}</p>
                    </div>
                    <h4 class="card-heading">
                        <a :href="article.linkFullText">{{ article.headText }}</a>
                    </h4>
                    <div class="card-data">
                        <p class="card-data-number">{{ article.data }}</p>
                        <a :href="article.linkFullText"><svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                            <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"

export default ({
    name: 'ArticlesNews',
    props: ['settings'],
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
    .articles {
        margin-top: 140px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__heading {
            text-decoration: none;
            color: $colorHeading;
            font-size: 50px;
            font-family: $fontSerif;
            font-weight: 400;
            letter-spacing: 1px;
        }

        &__text {
            color: $colorText;
            text-align: center;
            font-family: $fontSansSerif;
            font-size: 22px;
            font-weight: 400;
            letter-spacing: 0.22px;
            width: 70%;
        }
        .articles__cards {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 28px;

            .articles__card {
                display: flex;
                flex-direction: column;
                padding: 21px;
                box-sizing: border-box;
                justify-content: center;
                align-items: flex-start;
                gap: 10px;
                border-radius: 62px;
                border: 1px solid #E7E7E7;
                box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
                justify-content: flex-start;

                &:hover {
                    background-color: #F4F0EC;

                    svg {
                        cursor: pointer;

                        & circle{
                        fill: white;
                    }
                    }
                }

                .card-img {
                    position: relative;

                    &>img {
                        border-top-left-radius: 47px;
                        border-top-right-radius: 47px;
                        width: 100%;
                    }

                    &>p {
                        position: absolute;
                        bottom: 12px;
                        left: 25px;
                        padding: 8px;
                        color: $colorText;
                        font-size: 16px;
                        font-family: $fontSansSerif;
                        font-weight: 400;
                        line-height: 150%;
                        letter-spacing: 0.16px;
                        text-transform: capitalize;
                        border-radius: 8px 8px 8px 0px;
                        background: #FFF;
                    }
                }

                .card-heading {
                    width: 320px;

                    a {
                        text-decoration: none;
                        color: $colorHeading;
                        font-size: 25px;
                        font-family: $fontSerif;
                        font-weight: 400;
                        line-height: 125%;
                        letter-spacing: 0.5px;
                    }
                }

                .card-data {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    color: $colorText;
                    font-size: 16px;
                    font-family: $fontSansSerif;
                    font-weight: 400;
                    line-height: 150%;
                    letter-spacing: 0.16px;
                    text-transform: capitalize;
                }
            }
        }
}

</style>