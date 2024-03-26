import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectDetails:
    {
      heading: 'Minimal Look Bedrooms',
      text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ', 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.']
    },
    progress: // данные для страницы HomePage
      [
        { number: 12, text: 'Years Of Experiance' },
        { number: 85, text: 'Success Project' },
        { number: 15, text: 'Active Project' },
        { number: 95, text: 'Happy Customers' }
      ],
    followProjects: // данные для страницы HomePage
      [
        { srcImg: require("../assets/our_project/kitchen1.1.jpg"), class: "top-right", heading: "Modern Kitchen", linkCard: "../pages/ProjectPage.vue", links: [{ name: "Decor", link: "#" }, { name: "Artchitecture", link: "#" }] },
        { srcImg: require("../assets/our_project/kitchen1.2.jpg"), class: "top-left", heading: "Modern Kitchen", linkCard: "../pages/ProjectPage.vue", links: [{ name: "Decor", link: "#" }, { name: "Artchitecture", link: "#" }] },
        { srcImg: require("../assets/our_project/kitchen1.3.jpg"), class: "bottom-right", heading: "Modern Kitchen", linkCard: "../pages/ProjectPage.vue", links: [{ name: "Decor", link: "#" }, { name: "Artchitecture", link: "#" }] },
        { srcImg: require("../assets/our_project/kitchen1.4.jpg"), class: "bottom-left", heading: "Modern Kitchen", linkCard: "../pages/ProjectPage.vue", links: [{ name: "Decor", link: "#" }, { name: "Artchitecture", link: "#" }] }
      ],
    articles:  // данные для компонента Articles&News
      [
        { src: require("../assets/articles/articles1.jpg"), type: "Kitchen Design", linkFullText: "#", headText: "Let’s Get Solution For Building Construction Work", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "15 December,2022" },
        { src: require("../assets/articles/articles3.jpg"), type: "Interior Design", linkFullText: "#", headText: "Best For Any Office & Business Interior Solution", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "18 December,2022" },
        { src: require("../assets/articles/articles4.jpg"), type: "Kitchen Design", linkFullText: "#", headText: "Let’s Get Solution For Building Construction Work", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "20 December,2022" },
        { src: require("../assets/articles/articles5.jpg"), type: "Living Design", linkFullText: "#", headText: "Low Cost Latest Invented Interior Designing Ideas.", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "22 December,2022" },
        { src: require("../assets/articles/articles2.jpg"), type: "Living Design", linkFullText: "#", headText: "Low Cost Latest Invented Interior Designing Ideas.", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "22 December,2022" },
        { src: require("../assets/articles/articles6.jpg"), type: "Interior Design", linkFullText: "#", headText: "Best For Any Office & Business Interior Solution", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "25 December,2022" },
        { src: require("../assets/articles/articles7.jpg"), type: "Interior Design", linkFullText: "#", headText: "Best For Any Office & Business Interior Solution", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "28 December,2022" }
      ],
    articlesFull: [  // данные для страницы BlogDetailsPage
      { name: 'KitchenArticleFull', teg: 'Kitchen' },
      { name: 'PlanningKitchenArticleFull', teg: 'Kitchen Planning' },
      { name: 'ArchitectureArticleFull', teg: 'Architecture' },
      { name: 'BuildingArticleFull', teg: 'Building' },
      { name: 'BedroomArticleFull', teg: 'Bedroom' },
      { name: 'Bedroom2ArticleFull', teg: 'Bedroom' }
    ],
    tegsBlog:  // данные для страницы BlogDetailsPage
      [
        { name: "Kitchen", tegChecked: false },
        { name: "Kitchen Planning", tegChecked: false },
        { name: "Architecture", tegChecked: false },
        { name: "Building", tegChecked: false },
        { name: "Bedroom", tegChecked: false },
        { name: "All", tegChecked: true }
      ],
    projects: // данные для страницы ProjectPage
      [
        { heading: 'Minimal Bedroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.1.jpg"), teg: 'Bedroom' },
        { heading: 'Minimal Bedroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.2.jpg"), teg: 'Bedroom' },
        { heading: 'Classical Minimal Bedroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.3.jpg"), teg: 'Bedroom' },
        { heading: 'Modern Bedroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.4.jpg"), teg: 'Bedroom' },
        { heading: 'Modern Bedroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.5.jpg"), teg: 'Bedroom' },
        { heading: 'Minimal Bedroom Table', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.6.jpg"), teg: 'Bedroom' },
        { heading: 'Minimal Bedroom Table', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.7.jpg"), teg: 'Bedroom' },
        { heading: 'Modern Bathroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img2.0.jpg"), teg: 'Bathroom' },
        { heading: 'Minimal Bathroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img2.1.jpg"), teg: 'Bathroom' },
        { heading: 'Minimal Bathroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img2.2.jpg"), teg: 'Bathroom' },
        { heading: 'Classical Minimal Bathroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img2.3.jpeg"), teg: 'Bathroom' },
        { heading: 'Minimal Bath', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img2.4.jpg"), teg: 'Bathroom' },
        { heading: 'Classical Kitchen', links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img3.1.jpg"), teg: 'Kitchen' },
        { heading: 'Minimal Kitchen', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img3.2.jpg"), teg: 'Kitchen' },
        { heading: 'Minimal Kitchen', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img3.3.jpg"), teg: 'Kitchen' },
        { heading: 'Minimal Living Room', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img4.1.jpg"), teg: 'Living Area' },
        { heading: 'Classical Living Room', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img4.2.jpg"), teg: 'Living Area' },
        { heading: 'Classical Living Room', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img4.3.jpg"), teg: 'Living Area' },
        { heading: 'Classical Living Room', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img4.4.jpg"), teg: 'Living Area' },
        { heading: 'Minimal Kitchen table', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img3.4.jpg"), teg: 'Living Area' }
      ],
    tegs: // данные для страницы ProjectPage
      [
        { tegName: 'Bathroom', checked: false },
        { tegName: 'Bedroom', checked: false },
        { tegName: 'Kitchen', checked: false },
        { tegName: 'Living Area', checked: false }
      ]
  },
  mutations: {}
})
