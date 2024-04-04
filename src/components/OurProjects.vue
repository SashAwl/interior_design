<template>
    <div class="our-project">
        <div class="teg-buttons">
            <button v-for="(teg, index) in tegs" :key="teg.index" @click="checkFilterButton(index, teg)"
                class="teg-button" :class="{ 'teg-button-checked': teg.checked }">{{ teg.tegName }}</button>
        </div>
        <div class="articles">
            <div class="article" v-for="(project, index) in getFilterListPages" :key="index">
                <img :src="project.img" alt="photo" class="photo">
                <div class="article-text">
                    <div>
                        <h3 class="heading">{{ project.heading }}</h3>
                        <a href="project.links[0].link" class="text">{{ project.links[0].name }}</a> /
                        <a href="project.links[1].link" class="text">{{ project.links[1].name }}</a>
                    </div>
                    <router-link to="project-details">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg></router-link>
                </div>
            </div>
        </div>

        <PaginationPages :currentPage="getPaginationDetails.currentPage"
            :maxVisibleButtons="getPaginationDetails.countVisibleButtons" :totalPages="getPaginationDetails.totalPages"
            :perPage="getPaginationDetails.perPage" @pagechanged="onPageChange($event)" />
    </div>
</template>

<script>
import PaginationPages from './PaginationPages.vue';
import { mapState } from 'vuex';

export default {
    name: 'OurProject',
    components: {
        PaginationPages,
    },
    data() {
        return {
            tegsState: [],
            filterList: [],
            paginationDetails: {
                currentPage: 1,
                perPage: 4,
                totalPages: 10,
                countVisibleButtons: 3
            }

        }
    },
    created() {
        this.filterList = this.projects;
        this.tegsState = this.tegs;
        this.paginationDetails.totalPages = Math.ceil(this.filterList.length / this.paginationDetails.perPage);
    },
    computed: {
        ...mapState(['projects', 'tegs']),

        getPaginationDetails() {
            const { perPage, countVisibleButtons } = this.paginationDetails;

            if (this.filterList.length / perPage < countVisibleButtons) {
                const visibleBtn = Math.ceil(this.filterList.length / perPage);
                return {
                    currentPage: this.paginationDetails.currentPage,
                    perPage: this.paginationDetails.perPage,
                    totalPages: visibleBtn,
                    countVisibleButtons: visibleBtn,
                }
            }
            else {
                return this.paginationDetails;
            }
        },

        getFilterListPages() {
            const { currentPage, perPage } = this.paginationDetails;

            let startPosition = (currentPage - 1) * perPage;
            return this.filterList.slice(
                startPosition,
                Math.min(startPosition + perPage, this.filterList.length));
        }
    },
    methods: {
        checkFilterButton(index, teg) {
            this.tegsState.forEach(item => item.checked = false);
            this.tegs[index].checked = true;

            this.filterList = this.projects.filter(item => item.teg === teg.tegName);
            this.paginationDetails.currentPage = 1;
        },

        onPageChange(page) {
            this.paginationDetails.currentPage = page;
        }
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

.our-project {
    margin-top: 150px;
    margin-bottom: 150px;
}

.teg-buttons {
    border: 1px solid #CDA274;
    border-radius: 20px;
    margin: 0 auto;
    margin-bottom: 60px;
    width: max-content;

    .teg-button {
        padding: 26px 66px;
        text-align: center;
        font-family: $fontSansSerif;
        font-size: 18px;
        font-weight: 600;
        line-height: 125%;
        /* 22.5px */
        letter-spacing: 0.36px;
        border: none;
        background-color: white;
        border-radius: 18px;
        cursor: pointer;

        &-checked {
            background: #CDA274;
            color: #fff;
        }
    }
}

.articles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    .article {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-weight: 400;

        &-text {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin: 10px 0;
        }

        .photo {
            width: 100%;
        }

        .heading {
            color: #292F36;
            font-family: $fontSerif;
            font-size: 25px;
            letter-spacing: 0.5px;
            margin-bottom: 7px;
        }

        .text {
            color: #4D5053;
            font-family: Jost;
            font-size: 22px;
            letter-spacing: 0.22px;
            text-decoration: none;
        }
    }

}
</style>
