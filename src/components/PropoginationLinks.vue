<template>
  <div class="articles__propagination">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
        </div>        
</template>

<script>
  export default {
    name: 'PropaginationLinks',
    props: ['liks']
  }
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/_variables";
.articles__propagination {
        display: flex;
        justify-content: center;
        margin-top: 51px;

        span,
        svg {
            padding: 17px 19px;
            border-radius: 52px;
            color: $colorHeading;
            font-size: 16px;
            font-family: $fontSansSerif;
            font-weight: 500;
            line-height: 150%;
            text-transform: capitalize;
        }

        span:first-child {
            background: #F4F0EC;
        }

        span~span,
        svg {
            border: 1px solid $colorBeige;
            margin-left: 20px;
        }

        svg {
            padding: 21px 24px;
        }
    }
</style>

