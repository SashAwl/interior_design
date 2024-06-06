<template>
    <div class="back-to-top" v-show="isVisible" @click="scrollToTop">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'BackToTopButton',
    data() {
        return {
            isVisible: true
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isVisible = window.scrollY > 200;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/__variables.scss";

.back-to-top {
    position: fixed;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
    background: white;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: transform 0.1s ease-in;

    &:hover {
        transform: scale(1.2);
    }

    svg {
        width: 25px;
        padding: 13px 20px;
        fill-opacity: 60%;
    }
}
</style>