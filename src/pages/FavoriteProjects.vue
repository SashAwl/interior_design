<template>
    <div>
        <TopBlock :topData="topData" />
        <div class="center favorite-box">
            <OurProjectsBox v-if="getFavoriteList" :projectList="getFavoriteList" />
            <p v-else class="none-projects text">You haven't selected any project yet</p>
        </div>
    </div>
</template>

<script>
import OurProjectsBox from '@/components/OurProjectsBox.vue';
import TopBlock from '@/components/TopBlock.vue';
import { mapState } from 'vuex';

export default {
    name: 'FavoriteProjects',
    components: {
        OurProjectsBox,
        TopBlock
    },
    props: ['projectList'],
    data() {
        return {
            topData: {  // регулирует внешний вид компонента TopBlock для данной страницы
                visibility: true,
                link: "Favs",
                heading: "Favorite projects",
                srcImg: require("../assets/BannerFavorite.jpg")
            }
        }
    },
    computed: {
        ...mapState(['projects']),

        getFavoriteList() {
            const likeList = JSON.parse(localStorage.getItem('likeProjectData'));
            if (likeList.length > 0) {
                return this.projects.filter(item => likeList.includes(item.id));
            } else {
                return false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/_variables";

.center {
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
}

.favorite-box {
    margin-top: 100px;

    .heading {
        color: #292F36;
        font-family: $fontSerif;
        font-size: 50px;
        font-weight: 400;
        letter-spacing: 1px;
        text-align: center;
        margin-bottom: 70px;
    }

    .text {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        letter-spacing: 0.22px;
        text-decoration: none;
    }

    .none-projects {
        text-align: center;
        opacity: 70%;
    }
}
</style>