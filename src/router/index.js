import Vue from 'vue'
import VueRouter from 'vue-router'
import ProjectPage from '../pages/ProjectPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import HomePage from '../pages/HomePage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import BlogDetailsPage from '../pages/BlogDetailsPage.vue'
import ProjectDetailsPage from '../pages/ProjectDetailsPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/project',
      name: 'ProjectPage',
      component: ProjectPage
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/blog-details',
      name: 'BlogDetailsPage',
      component: BlogDetailsPage
    },
    {
      path: '/project-details',
      name: 'ProjectDetailsPage',
      component: ProjectDetailsPage
    },
    {
      path: '/*',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})