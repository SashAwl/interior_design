<template>
    <div>
      <TopBlock :topData="topData"/>
      <OurProjects @checkedButton="checkButton($event)" :tegItems="tegs" :projectItems="projects" class="center"/>
    </div>
  </template>
  
  <script>
  import TopBlock from './TopBlock.vue'
  import OurProjects from './OurProjects.vue'
  
  export default {
    name: 'PageOurProject',
    components: {
      TopBlock,
      OurProjects    
    },
    data () {
      return {
        topData: {
                visibility: true,
                link:"Project",
                heading:"Our Project",
                srcImg: require("../assets/Banner.jpg")
        },
        projects: [
          { heading: 'Minimal Bedroom', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img1.1.jpg', teg: 'Bedroom'},
          { heading: 'Minimal Bedroom', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img1.2.jpg', teg: 'Bedroom'},
          { heading: 'Classical Minimal Bedroom', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img1.3.jpg', teg: 'Bedroom'},
          { heading: 'Modern Bedroom', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img1.4.jpg', teg: 'Bedroom'},
          { heading: 'Modern Bedroom', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img1.5.jpg', teg: 'Bedroom'},
          { heading: 'Minimal Bedroom Table', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img1.6.jpg', teg: 'Bedroom'},
          { heading: 'System Table', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img1.7.jpg', teg: 'Bedroom'},
          { heading: 'Modern Bathroom', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img2.0.jpg', teg: 'Bathroom'},
          { heading: 'Minimal Bathroom', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img2.1.jpg', teg: 'Bathroom'},
          { heading: 'Minimal Bathroom', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img2.2.jpg', teg: 'Bathroom'},
          { heading: 'Classical Minimal Bathroom', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img2.3.jpg', teg: 'Bathroom'},
          { heading: 'Minimal Bath', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img2.4.jpg', teg: 'Bathroom'},
          { heading: 'Classical Kitchen', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img3.1.jpg', teg: 'Kitchen'},
          { heading: 'Minimal Kitchen', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img3.2.jpg', teg: 'Kitchen'},
          { heading: 'Minimal Kitchen', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img3.3.jpg', teg: 'Kitchen'},
          { heading: 'Minimal Living Room', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img4.1.jpg', teg: 'Living Area'},
          { heading: 'Classical Living Room', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img4.2.jpg', teg: 'Living Area'},
          { heading: 'Minimal Kitchen table', links: [{name: 'Decor', link: '#'}, {name: 'Architecture', link: '#'}], img: '../assets/our_project/img3.2.jpg', teg: 'Living Area'}
        ],
        tegs: [
          {tegName: 'Bathroom', checked: false},
          {tegName: 'Bedroom', checked: false},
          {tegName: 'Kitchen', checked: false},
          {tegName: 'Living Area', checked: false}
        ]
      }
    },
    methods: {
      checkButton (index) {
        this.tegs.forEach(item => item.checked = false)
        this.tegs[index].checked = true
      } 
    }
  }
  </script>
  
  <style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
  @import "../assets/__variables.scss";
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px; 
  }
  .center {
      padding-left: calc(50% - 580px);
      padding-right: calc(50% - 580px);
  }
  </style>
  