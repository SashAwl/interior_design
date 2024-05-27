<template>
    <div>
        <TopBlock :topData="topData" />
        <div class="center">
            <div class="links-back-forvard">
                <BackButton />
                <div class="return-link">
                    <router-link to="/blog-details">
                        Go to the article list
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="center">
            <component :is="currentArticleComponent" class="article-component"></component>
        </div>
    </div>
</template>

<script>
import TopBlock from '@/components/TopBlock.vue';
import BackButton from '@/components/BackButton.vue';
import { mapState } from 'vuex';

export default {
    name: 'BlogDetailsPageItem',
    props: ['id'],
    data() {
        return {
            topData: {  // регулирует внешний вид компонента TopBlock для данной страницы
                visibility: false,
                link: "",
                heading: "",
                srcImg: require("../assets/BannerBlog.jpg")
            },
            selectedArticle: {},    // объект с данными из хранилища о выбранной статье, в т.ч. имя компонента с полной статьей
            currentArticleComponent: null   // объект компонента с полной статьей
        }
    },
    computed: {
        ...mapState(['articles'])
    },
    created() {
        this.selectedArticle = this.articles.filter(item => item.id == this.id)[0];
        this.loadArticleComponent(this.selectedArticle.nameComponent);
    },
    methods: {
        async loadArticleComponent(nameComponent) {  // динамически импортируем компонент выбранной статьи
            try {
                const ArticleComponent = await import(`@/components/articles_full_components/${nameComponent}.vue`);
                this.currentArticleComponent = ArticleComponent.default;
            } catch (error) {
                console.error("Failed to load component:", error);
            }
        }
    },
    components: {
        TopBlock,
        BackButton
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

.links-back-forvard {
    margin-top: 90px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.return-link {
    display: flex;
    align-items: center;
    font-style: italic;
    transition: transform 0.1s ease-in;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);

        svg path {
            fill: grey;
        }
    }

    svg {
        width: 12px;
        margin: auto 10px;

        path {
            fill: #80808073;
        }
    }

    a {
        display: block;
        text-decoration: none;
        color: $colorText;
        font-family: $fontSansSerif;
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 0.22px;
    }
}

// .indent-back-button {
//     margin-top: 50px;
//     margin-bottom: -20px;
// }</style>