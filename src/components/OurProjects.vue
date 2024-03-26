<template>
    <div class="our-project">
        <div class="teg-buttons">
            <button v-for="(teg, index) in tegs" :key="teg.index" @click="checkButton(index, teg)" class="teg-button" :class="{'teg-button-checked' : teg.checked}">{{teg.tegName}}</button>
        </div>
        <div class="articles">
            <div class="article" v-for="(project, index) in filterList" :key="index">
                <img :src="project.img" alt="photo" class="photo">
                <div class="article-text">
                    <div>
                        <h3 class="heading">{{ project.heading }}</h3>
                        <a href="project.links[0].link" class="text">{{ project.links[0].name }}</a> / 
                        <a href="project.links[1].link" class="text">{{ project.links[1].name }}</a>
                    </div>
                    <router-link to="project-details">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
<path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></router-link>
                </div>
            </div>
        </div>
        <PropoginationLinks/>
    </div>
</template>

<script>
import PropoginationLinks from './PropoginationLinks.vue';
import { mapState } from 'vuex';

export default {
  name: 'OurProject',
  components: {
    PropoginationLinks
  },
  data () {
    return {
        tegsState: [],
        filterList: []
    }
  },
  computed: {
    ...mapState(['projects', 'tegs'])
  },
  created() {
    this.filterList = this.projects
    this.tegsState = this.tegs
  },
  methods: {
    checkButton(index, teg) {
      this.tegsState.forEach(item => item.checked = false)
      this.tegs[index].checked = true

      this.filterList = this.projects.filter(item => item.teg === teg.tegName)
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
.our-project{
    margin-top: 150px;
    margin-bottom: 150px;
}
.teg-buttons{
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
        line-height: 125%; /* 22.5px */
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
        .text{
            color: #4D5053;
            font-family: Jost;
            font-size: 22px;
            letter-spacing: 0.22px;
            text-decoration: none;
        }
    }

}
</style>
