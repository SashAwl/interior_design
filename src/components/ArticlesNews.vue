<template>
    <div class="center">
        <div class="articles" :style="settings.alignHeading">
            <router-link to="/blog-details" class="articles__heading">
                Articles & News
            </router-link>
            <p class="articles__text" v-if="settings.longText">It is a long established fact that a reader will be
                distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
            <div class="box-card">
                <div class="other-cards-left" @click="scrollLeftCards" v-if="settings.isCardSlider"
                    :disabled="isInFirstCard" :class="{ 'block-scroll': isInFirstCard }">
                    <svg :disabled="isInFirstCard" class="arrow" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path
                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                </div>
                <div class="articles__cards">
                    <div class="articles__card" v-for="article in getVisibleSetCards" :key="article.id">
                        <router-link :to="{ name: 'BlogDetailsPageItem', params: { id: article.id } }">
                            <div class="card-img">
                                <img :src="article.src" alt="photo">
                                <p>{{ article.type }}</p>
                            </div>
                            <h4 class="card-heading"> {{ article.headText }} </h4>
                            <div class="card-data">
                                <p class="card-data-number">{{ article.date }}</p>
                                <svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                                    <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="other-cards-right" @click="scrollRightCards" v-if="settings.isCardSlider"
                    :disabled="isInLastCard" :class="{ 'block-scroll': isInLastCard }">
                    <svg class="arrow arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path
                            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                </div>
            </div>
            <div class="more-cards-down" @click="getMoreCards" :visibility="isInLastCard"
                :class="{ 'hide-scroll': isInLastCard }" v-if="!settings.isCardSlider">
                <svg class="arrow arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default ({
    name: 'ArticlesNews',
    props: ['settings'],
    data() {
        return {
            countCard: 0,
            isShowLatestNew: false,
            startCard: 2,
            endCard: 0
        }
    },
    computed: {
        ...mapState(['articles']),

        getVisibleSetCards() {
            let articlesList = [...this.articles.slice(this.endCard, this.startCard)];
            articlesList.reverse();
            return articlesList;
        },
        isInFirstCard() {
            return this.startCard === undefined;
        },
        isInLastCard() {
            return this.endCard === -this.articles.length;
        }
    },
    created() {
        this.countCard = this.settings.countCard;
        this.isShowLatestNew = this.settings.isShowLatestNews;

        this.endCard = this.isShowLatestNew ? -this.countCard - 1 : -this.countCard;
        this.startCard = this.isShowLatestNew ? -1 : undefined;
    },
    methods: {
        scrollLeftCards() {
            if (this.startCard < - 1) {
                this.endCard += 1;
                this.startCard += 1;
            }
            if (this.startCard === -1) {
                this.endCard += 1;
                this.startCard = undefined;
            }
        },
        scrollRightCards() {
            if (this.endCard > -this.articles.length) {
                this.endCard -= 1;
                this.startCard = (this.startCard === undefined) ? -1 : this.startCard - 1;
            }
        },
        getMoreCards() {
            if (this.endCard > -this.articles.length) {
                this.endCard = Math.max(-this.articles.length, this.endCard - 6);
            }
        }
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
        transition: transform 0.1s ease-in;

        &:hover {
            transform: scale(1.02);
        }
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

    .box-card {
        display: flex;
        align-items: center;
    }

    .articles__cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 28px;
        margin-top: 50px;

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

                    & circle {
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

            a {
                text-decoration: none;
                color: $colorHeading;
                font-size: 25px;
                font-family: $fontSerif;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 0.5px;
            }

            .card-heading {
                width: 320px;
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
                transition: transform 0.1s ease-in;
            }

            & svg:hover {
                transform: scale(1.2);
            }
        }
    }

    .arrow {
        width: 30px;
        padding: 15px;
        cursor: pointer;
        transition: transform 0.1s ease-in;

        &:hover {
            transform: scale(1.2);
        }
    }

    .more-cards-down {
        margin: 0 auto;
    }
}

.block-scroll {
    cursor: auto;
    pointer-events: none;
    opacity: 50%;
}

.hide-scroll {
    visibility: hidden;
}
</style>