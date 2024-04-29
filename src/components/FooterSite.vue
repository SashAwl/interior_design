<template>
    <footer class="footer">
        <div class="footer__logo">
            <div class="header__logo">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                        fill="#CDA274" />
                </svg>
                <span>Interno</span>
            </div>
            <p class="footer-text">It is a long established fact that a reader will be distracted lookings.</p>
            <div class="footer__logo-links">
                <a href="http://twitter.com"><svg width="19" height="16" viewBox="0 0 19 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                            fill="#292F36" />
                    </svg></a>
                <a href="http://linkedin.com" class="social-network-link"><svg width="17" height="16"
                        viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
                            fill="#292F36" />
                    </svg></a>
            </div>
        </div>
        <div class="footer__pages">
            <h3 class="footer-heading"> Pages</h3>
            <ul class="footer-list">
                <li class="router-link"><router-link to="/">Home</router-link></li>
                <li class="router-link"><router-link to="project">Project</router-link></li>
                <li class="router-link"><router-link to="blog">Blog</router-link></li>
            </ul>

        </div>
        <div class="footer__contacts">
            <h3 class="footer-heading">Contact</h3>
            <ul class="footer-list">
                <li>
                    55 East Birchwood Ave. Brooklyn, New York 11201
                </li>
                <li>contact@interno.com</li>
                <li>(123) 456 - 7890</li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterSite.vue'
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/_variables";

.header__logo {
    display: flex;
    align-items: center;
}

.header__logo>span {
    color: $colorHeading;
    font-family: $fontSerif;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 40px;
    line-height: 125%;
    margin-left: 8px;
}

.footer {
    padding-top: 160px;
    padding-bottom: 116px;
    display: flex;
    justify-content: space-between;
    text-align: start;

    &-text {
        color: $colorText;
        font-size: 22px;
        font-family: $fontSansSerif;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
        width: 393px;
    }

    &-heading {
        color: $colorHeading;
        font-size: 25px;
        font-family: $fontSerif;
        font-weight: 400;
        line-height: 125%;
        margin-top: 0;
    }

    &-list {
        font-size: 22px;
        font-family: $fontSansSerif;
        font-weight: 400;
        letter-spacing: 0.22px;
        list-style-type: none;
        padding: 0;
        width: 258px;

        .router-link {
            transition: transform 0.1s ease-in;

            &:hover {
                transform: scale(1.02);
            }

            a {
                text-decoration: none;
                color: $colorText;
            }
        }

        li~li {
            margin-top: 40px;
        }
    }

    &__logo-links {

        display: flex;

        svg {
            width: 18px;
            height: 22px;
            padding-right: 50px;
            transition: transform 0.1s ease-in;

            &:hover {
                transform: scale(1.2);
            }

            .social-network-link {
                padding: 50px;
            }
        }
    }
}
</style>