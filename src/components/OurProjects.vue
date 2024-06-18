<template>
    <div class="our-project">
        <div class="tag-buttons">
            <button v-for="(tag, index) in tags" :key="tag.index" @click="checkFilterButton(index, tag)"
                class="tag-button" :class="{ 'tag-button-checked': tag.checked }">{{ tag.tagName }}</button>
        </div>

        <OurProjectBox :projectList="getFilterListPages" />

        <PaginationPages :currentPage="getPaginationDetails.currentPage"
            :maxVisibleButtons="getPaginationDetails.countVisibleButtons" :totalPages="getPaginationDetails.totalPages"
            :perPage="getPaginationDetails.perPage" @pagechanged="onPageChange($event)" />
    </div>
</template>

<script>
import PaginationPages from './PaginationPages.vue';
import OurProjectBox from './OurProjectsBox.vue';
import { mapState } from 'vuex';

export default {
    name: 'OurProject',
    components: {
        PaginationPages,
        OurProjectBox
    },
    data() {
        return {
            tagsState: [],
            filterList: [],
            paginationDetails: {
                currentPage: 1,
                perPage: 4,
                totalPages: 10,
                countVisibleButtons: 3
            },
        }
    },
    created() {
        this.inizializePageData();
        this.setupPagination();
    },
    computed: {
        ...mapState(['projects', 'tags']),

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
        checkFilterButton(index, tag) {
            this.tagsState.forEach(item => item.checked = false);
            this.tags[index].checked = true;

            this.updateFilterList(tag);
            this.resetToFirstPage();
        },

        onPageChange(page) {
            this.paginationDetails.currentPage = page;
        },

        inizializePageData() {
            this.filterList = this.projects;
            this.tagsState = this.tags;
        },

        setupPagination() {
            this.paginationDetails.totalPages = Math.ceil(this.filterList.length / this.paginationDetails.perPage);
        },

        updateFilterList(tag) {
            this.filterList = this.projects.filter(item => item.tag === tag.tagName);
        },

        resetToFirstPage() {
            this.paginationDetails.currentPage = 1;
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

    a {
        text-decoration: none;
    }
}

.tag-buttons {
    border: 1px solid #CDA274;
    border-radius: 20px;
    margin: 0 auto;
    margin-bottom: 60px;
    width: max-content;

    .tag-button {
        padding: 26px 66px;
        text-align: center;
        font-family: $fontSansSerif;
        font-size: 18px;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
        border: none;
        background-color: white;
        border-radius: 18px;
        cursor: pointer;
        transition: transform 0.1s ease-in;

        &:hover {
            transform: scale(1.02);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        }

        &-checked {
            background: #CDA274;
            color: #fff;
        }
    }
}
</style>
