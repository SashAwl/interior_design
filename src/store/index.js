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
        { id: 1, src: require("../assets/articles/articles1.jpg"), type: "Kitchen Design", headText: "Let’s Get Solution For Building Construction Work", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "15 December,2022", nameComponent: 'KitchenArticleFull', tag: 'Kitchen' },
        { id: 2, src: require("../assets/articles/articles3.jpg"), type: "Interior Design", headText: "Best For Any Office & Business Interior Solution", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "18 December,2022", nameComponent: 'BuildingArticleFull', tag: 'Building' },
        { id: 3, src: require("../assets/articles/articles4.jpg"), type: "Kitchen Design", headText: "Let’s Get Solution For Building Construction Work", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "20 December,2022", nameComponent: 'PlanningKitchenArticleFull', tag: 'Kitchen Planning' },
        { id: 4, src: require("../assets/articles/articles5.jpg"), type: "Living Design", headText: "Low Cost Latest Invented Interior Designing Ideas.", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "22 December,2022", nameComponent: 'BedroomArticleFull', tag: 'Bedroom' },
        { id: 5, src: require("../assets/articles/articles2.jpg"), type: "Living Design", headText: "Low Cost Latest Invented Interior Designing Ideas.", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "22 December,2022", nameComponent: 'BedroomArticleFull', tag: 'Bedroom' },
        { id: 6, src: require("../assets/articles/articles6.jpg"), type: "Interior Design", headText: "Best For Any Office & Business Interior Solution", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "25 December,2022", nameComponent: 'ArchitectureArticleFull', tag: 'Architecture' },
        { id: 7, src: require("../assets/articles/articles7.jpg"), type: "Interior Design", headText: "Best For Any Office & Business Interior Solution", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "28 December,2022", nameComponent: 'ArchitectureArticleFull', tag: 'Architecture' },
        { id: 8, src: require("../assets/articles/articles1.jpg"), type: "Kitchen Design", headText: "Let’s Get Solution For Building Construction Work", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "15 December,2022", nameComponent: 'KitchenArticleFull', tag: 'Kitchen' },
        { id: 9, src: require("../assets/articles/articles3.jpg"), type: "Interior Design", headText: "Best For Any Office & Business Interior Solution", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "18 December,2022", nameComponent: 'BuildingArticleFull', tag: 'Building' },
        { id: 10, src: require("../assets/articles/articles4.jpg"), type: "Kitchen Design", headText: "Let’s Get Solution For Building Construction Work", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "20 December,2022", nameComponent: 'PlanningKitchenArticleFull', tag: 'Kitchen Planning' },
        { id: 11, src: require("../assets/articles/articles5.jpg"), type: "Living Design", headText: "Low Cost Latest Invented Interior Designing Ideas.", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "22 December,2022", nameComponent: 'BedroomArticleFull', tag: 'Bedroom' },
        { id: 12, src: require("../assets/articles/articles2.jpg"), type: "Living Design", headText: "Low Cost Latest Invented Interior Designing Ideas.", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "22 December,2022", nameComponent: 'BedroomArticleFull', tag: 'Bedroom' },
        { id: 13, src: require("../assets/articles/articles6.jpg"), type: "Interior Design", headText: "Best For Any Office & Business Interior Solution", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "25 December,2022", nameComponent: 'ArchitectureArticleFull', tag: 'Architecture' },
        { id: 14, src: require("../assets/articles/articles7.jpg"), type: "Interior Design", headText: "Best For Any Office & Business Interior Solution", describeText: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>", date: "28 December,2022", nameComponent: 'ArchitectureArticleFull', tag: 'Architecture' }
      ],
    projects: // данные для страницы ProjectPage
      [
        { heading: 'Minimal Bedroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.1.jpg"), tag: 'Bedroom' },
        { heading: 'Minimal Bedroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.2.jpg"), tag: 'Bedroom' },
        { heading: 'Classical Minimal Bedroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.3.jpg"), tag: 'Bedroom' },
        { heading: 'Modern Bedroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.4.jpg"), tag: 'Bedroom' },
        { heading: 'Modern Bedroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.5.jpg"), tag: 'Bedroom' },
        { heading: 'Minimal Bedroom Table', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.6.jpg"), tag: 'Bedroom' },
        { heading: 'Minimal Bedroom Table', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img1.7.jpg"), tag: 'Bedroom' },
        { heading: 'Modern Bathroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img2.0.jpg"), tag: 'Bathroom' },
        { heading: 'Minimal Bathroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img2.1.jpg"), tag: 'Bathroom' },
        { heading: 'Minimal Bathroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img2.2.jpg"), tag: 'Bathroom' },
        { heading: 'Classical Minimal Bathroom', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img2.3.jpeg"), tag: 'Bathroom' },
        { heading: 'Minimal Bath', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img2.4.jpg"), tag: 'Bathroom' },
        { heading: 'Classical Kitchen', links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img3.1.jpg"), tag: 'Kitchen' },
        { heading: 'Minimal Kitchen', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img3.2.jpg"), tag: 'Kitchen' },
        { heading: 'Minimal Living Room', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img4.1.jpg"), tag: 'Living Area' },
        { heading: 'Classical Living Room', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img4.2.jpg"), tag: 'Living Area' },
        { heading: 'Classical Living Room', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img4.3.jpg"), tag: 'Living Area' },
        { heading: 'Classical Living Room', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img4.4.jpg"), tag: 'Living Area' },
        { heading: 'Minimal Kitchen table', linkDetails: "", links: [{ name: 'Decor', link: '#' }, { name: 'Architecture', link: '#' }], img: require("../assets/our_project/img3.4.jpg"), tag: 'Living Area' }
      ],
    tags: // данные для страницы ProjectPage
      [
        { tagName: 'Bathroom', checked: false },
        { tagName: 'Bedroom', checked: false },
        { tagName: 'Kitchen', checked: false },
        { tagName: 'Living Area', checked: false }
      ],
    sliderImgList:
      [
        { id: 1, name: "img1", imgSrc: "1.1.jpg" },
        { id: 2, name: "img2", imgSrc: "1.2.jpg" },
        { id: 3, name: "img3", imgSrc: "1.3.jpg" },
        { id: 4, name: "img4", imgSrc: "1.4.jpg" },
        { id: 5, name: "img1", imgSrc: "1.5.jpg" },
        { id: 6, name: "img2", imgSrc: "1.6.jpg" }
      ]
  },
  mutations: {}
})
