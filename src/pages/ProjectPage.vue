<template>
  <div>
    <TopBlock :topData="topData" />
    <OurProjects class="center"/>
  </div>
</template>
  
<script>
import TopBlock from '../components/TopBlock.vue'
import OurProjects from '../components/OurProjects.vue'

export default {
  name: 'ProjectPage',
  components: {
    TopBlock,
    OurProjects
  },
  data() {
    return {
      topData: {  // регулирует внешний вид компонента Articles&News на данной странице
        visibility: true,
        link: "Project",
        heading: "Our Project",
        srcImg: require("../assets/BannerProject.jpg")
      }
    }
  }
}
</script>
  
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/__variables.scss";

.center {
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
}
</style>
  