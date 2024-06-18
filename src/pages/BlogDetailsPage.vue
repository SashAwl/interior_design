<template>
    <div>
        <TopBlock :topData="topData" />
        <BackButton class="center indent-back-button" />
        <div class="full-articles center">
            <div class="full-articles__list">
                <div class="articles-components">
                    <component v-for="item in visibleArticleList" :is="item" :key="item.id">
                    </component>
                </div>
                <button @click="loadMoreArticles" class="load-more" :disabled="isInLastArticle"
                    :class="{ 'disabled-button': isInLastArticle }">
                    Load more
                </button>
            </div>
            <div class="full-articles__tags">
                <h5 class="tags__heading">
                    Tags
                </h5>
                <div class="full-articles__tags-block">
                    <button @click="getFilterListComponents(tag)" v-for=" tag  in tags" :key="tag.id"
                        class='full-articles__tags-block-item' :class="{ 'checked-tag': tag.tagChecked }">{{
            tag.name }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopBlock from '../components/TopBlock.vue';
import BackButton from '@/components/BackButton.vue';
import { mapState } from 'vuex';

export default {
    name: 'BlogDetailsPage',
    components: {
        TopBlock,
        BackButton
    },
    data() {
        return {
            topData: {  // регулирует внешний вид компонента TopBlock для данной страницы
                visibility: false,
                link: "",
                heading: "",
                srcImg: require("../assets/BannerBlog.jpg")
            },
            filterListComponents: [],
            currentArticleComponents: null,
            errorLoadSomeComponent: false,
            perPage: 1,
            endArticlePerPage: 1,
            tags: [{ name: 'All', tagChecked: true }]
        }
    },
    computed: {
        ...mapState(['articles']),

        visibleArticleList() {
            return this.filterListComponents.slice(0, this.endArticlePerPage);
        },
        isInLastArticle() {
            return this.endArticlePerPage === this.filterListComponents.length;
        }
    },
    async created() {
        const tagNameList = Array.from(new Set(this.articles.map(article => article.tag)));
        const tagList = tagNameList.map(tagItem => ({
            name: tagItem,
            tagChecked: false
        }));
        this.tags.push(...tagList);

        await this.loadArticleComponents(this.articles.map(article => article.nameComponent));
        this.filterListComponents = this.currentArticleComponents;
    },
    methods: {  // фильтрует данные на странице
        getFilterListComponents(tag) {
            this.tags.forEach(itemTag => itemTag.tagChecked = false);
            tag.tagChecked = true;

            const filteredNameList = tag.name === 'All'
                ? this.articles.map(item => item.nameComponent)
                : this.articles
                    .filter(itemArticle => itemArticle.tag === tag.name)
                    .map(item => item.nameComponent)

            this.filterListComponents = this.currentArticleComponents.filter(item => filteredNameList.includes(item.name));

            this.endArticlePerPage = this.perPage;
        },

        async loadArticleComponents(nameComponents) {  // Динамически импортируем компоненты выбранных статей
            try {
                const results = await Promise.allSettled(
                    nameComponents.map(async (nameComponent) => {
                        const ArticleComponent = await import(`@/components/articles_full_components/${nameComponent}.vue`);
                        return ArticleComponent.default;
                    })
                );
                this.currentArticleComponents = results
                    .filter(result => result.status === 'fulfilled')
                    .map(result => result.value);

                const rejectedResults = results.filter(result => result.status === 'rejected');
                rejectedResults.forEach(result => console.error("Failed to load component:", result.reason));
                this.errorLoadSomeComponent = true;

            } catch (error) {
                console.error("Failed to load article components:", error);
            }
        },
        loadMoreArticles() {
            this.endArticlePerPage = Math.min(this.endArticlePerPage + this.perPage, this.filterListComponents.length);
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

.indent-back-button {
    margin-top: 90px;
}

.full-articles {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 52px;

    &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .load-more {
        margin-top: 50px;
        border: none;
        color: $colorText;
        font-size: 22px;
        font-family: $fontSansSerif;
        font-weight: 400;
        padding: 9px 74px;
        border-radius: 30px;
        cursor: pointer;
        transition: transform 0.1s ease-in;

        &:hover {
            transform: scale(1.2);
        }
    }

    .disabled-button {
        opacity: 50%;
        cursor: auto;
        pointer-events: none;
    }

    .full-articles__tags {
        .tags__heading {
            color: $colorHeading;
            font-size: 25px;
            font-family: $fontSerif;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
            margin-top: 0;
            margin-bottom: 24px;
        }

        .full-articles__tags-block {
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
                transition: transform 0.1s ease-in;

                &:hover {
                    transform: scale(1.02);
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                }
            }
        }

        .checked-tag {
            background-color: #292F36;
            color: #FFF
        }
    }

    .articles__list-item {


        .load-more {
            margin: 0 auto;
            border: none;
        }

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