<template>
    <div>
        <button @click="goBack" class="return-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
            <span>Back</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'BackButton',
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/__variables.scss";

.return-link {
    border: none;
    background-color: white;
    color: $colorText;
    font-size: 22px;
    font-family: $fontSansSerif;
    font-weight: 400;
    font-style: italic;
    display: flex;
    align-items: center;
    transition: transform 0.1s ease-in;
    cursor: pointer;
    margin: 0;

    &:hover {
        transform: scale(1.02);

        svg path {
            fill: grey;
        }
    }

    svg {
        width: 12px;
        margin-right: 10px;

        path {
            fill: #80808073;
        }
    }
}
</style>