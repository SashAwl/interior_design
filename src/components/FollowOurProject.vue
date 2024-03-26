<template>
    <div class="follow_project">
        <router-link to='/project' class="follow_project-heading">Follow Our Projects</router-link>
        <p class="follow_project-text">It is a long established fact that a reader will be distracted by the of readable
            content of page lookings at its layouts points.</p>
        <div class="follow_project-projects">
            <div v-for="(project, index) in followProjects" :key="index" class="project-item">
                <img :src="project.srcImg" alt="photo" :class="project.class">
                <div class="project-item-text">
                    <div>
                        <h3 class="heading"><a :href="project.linkCard">{{ project.heading }}</a></h3>
                        <a :href="project.links[0].link" class="text">{{ project.links[0].name }}</a> /
                        <a :href="project.links[1].link" class="text">{{ project.links[1].name }}</a>
                    </div>
                    <a href="#">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg></a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default ({
    name: 'FollowOurProject',
    computed: {
        ...mapState(['followProjects'])
    }
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/_variables";

.center {
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
}

.follow_project {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-heading {
        text-decoration: none;
        color: $colorHeading;
        text-align: center;
        font-family: $fontSerif;
        font-size: 50px;
        font-weight: 400;
        letter-spacing: 1px;
        margin-top: 100px;
        margin-bottom: 0;
    }

    &-text {
        color: $colorText;
        text-align: center;
        font-family: $fontSansSerif;
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 0.22px;
        width: 64%;
        margin-bottom: 50px;
    }

    &-projects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 58px;
    }

    .project-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-weight: 400;

        .top-left {
            border-top-left-radius: 100px;
        }

        .top-right {
            border-top-right-radius: 100px;
        }

        .bottom-left {
            border-bottom-left-radius: 100px;
        }

        .bottom-right {
            border-bottom-right-radius: 100px;
        }


        &-text {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin: 10px 0;
        }

        .heading {
            margin-bottom: 7px;

            a {
                text-decoration: none;
                color: #292F36;
                font-family: $fontSerif;
                font-size: 25px;
                letter-spacing: 0.5px;
            }
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