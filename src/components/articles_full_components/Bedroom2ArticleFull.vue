<template>
    <div>
        <article class="articles__list-item">
                <h3 class="item__heading"> Get Solution for Building Construction Work in the bedroom</h3>
                <img class="item__img" src="../../assets/article-page/article6.1.jpg" alt="photo">
                <div class="item__nav item__text">
                    <p class="item__nav-date">26 December,2022 </p>
                    <div class="item__nav-link">
                        <a href="#">Interior</a> /
                        <a href="#">Home</a> /
                        <a href="#">Decore</a>
                    </div>
                </div>
                <p class="item__text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
                    popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injecthumour, or randomised words which don't look even
                    slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary.
                </p>
                <div class="item__high-text">
                    <div class="text-block">
                        <p>”</p>
                        <p> The details are not the details. They make the design.</p>
                    </div>
                </div>
                <h3 class="item__heading">
                    Design sprints are great
                </h3>
                <div class="item__text">
                    <p>
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
                        popular belief.There are many variations of passages of Lorem Ipsum available, but the majority
                        have
                        suffered.
                    </p>
                    <ol>
                        <li><span>Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                                available,
                                but the majority have suffered.</span></li>
                        <li><span>
                                Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                                available,
                                but the majority have suffered.
                            </span></li>
                        <li><span>Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                                available,
                                but the majority have suffered.</span></li>
                    </ol>
                </div>
                <img class="item__img" src="../../assets/article-page/article6.2.jpg" alt="photo">
                <p class="item__text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
                    popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered.
                </p>
            </article>
    </div>
</template>
<script>
export default {
    name: 'Bedroom2ArticleFull'
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
    @import "../../assets/__variables.scss";
    .articles__list-item {

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
    // .articles__list-item~.articles__list-item {
    //     margin-top: 130px;
    // }
</style>