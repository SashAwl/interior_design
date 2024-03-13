<template>
    <div class="center">
        <div class="error_block">
        <div class="error_block-text">
            <h1 class="heading">404</h1>
            <h3 class="text">We are sorry, but the page you requested was not found</h3>
            <div class="button">
                <router-link to="/" class="back_home">
                    Back to home
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
                </router-link>
                
            </div>
        </div>
        <img src="../assets/error404.jpg" alt="photo" class="error_block-img">
    </div>
    </div>
</template>

<script>
export default ({
    name: 'NotFoundPage',
    components: {}
})
</script>

<style lang="scss" scoped>
 @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
  @import "../assets/__variables.scss";

  .center {
      padding-left: calc(50% - 580px);
      padding-right: calc(50% - 580px);
  }
.error_block{
    display: grid;
    grid-template-columns: 2fr 3fr;

    .heading {
        color: $colorBeige;
        font-family: $fontSerif;
        font-size: 250px;
        font-weight: 400;
        margin-bottom: 0;
        margin-top: 50px ;
    }
    .text {
        color: $colorHeading;
        font-family: $fontSerif;
        font-size: 35px;
        font-style: normal;
        letter-spacing: 0.35px;
        width: 478px;
        margin-top: 0;
    }
    .back_home {
        padding: 26px 54px;
        border-radius: 18px;
        background: #292F36;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        color: #FFF;
        text-align: center;
        font-family: $fontSansSerif;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.36px;
        display: flex;
        align-items: center;
        text-decoration: none;
        width: max-content;

        svg {
            padding-left: 10px;
        }
    }
}
.error_block-img {
    max-height: 956px;
    border-bottom-left-radius: 370px;
    max-width: 100%;
}
</style>