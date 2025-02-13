import Vue from "vue";
import VueRouter from "vue-router";
import ProjectPage from "../pages/ProjectPage.vue";
import BlogPage from "../pages/BlogPage.vue";
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import BlogDetailsPage from "../pages/BlogDetailsPage.vue";
import BlogDetailsPageItem from "../pages/BlogDetailsPageItem.vue";
import ProjectDetailsPage from "../pages/ProjectDetailsPage.vue";
import FavoriteProjects from "@/pages/FavoriteProjects.vue";
import AuthentificationForm from "@/components/AuthentificationForm.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.NODE_ENV === "production" ? "/interior_design/" : "/",
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/project",
      name: "ProjectPage",
      component: ProjectPage,
    },
    {
      path: "/blog",
      name: "BlogPage",
      component: BlogPage,
    },
    {
      path: "/blog-details",
      name: "BlogDetailsPage",
      component: BlogDetailsPage,
    },
    {
      path: "/blog-details/:id",
      name: "BlogDetailsPageItem",
      component: BlogDetailsPageItem,
      props: true,
    },
    {
      path: "/project-details",
      name: "ProjectDetailsPage",
      component: ProjectDetailsPage,
    },
    {
      path: "/favorite-projects",
      name: "FavoriteProjects",
      component: FavoriteProjects,
    },
    {
      path: "/auth-form",
      name: "AuthentificationForm",
      component: AuthentificationForm,
    },
    {
      path: "/*",
      name: "NotFoundPage",
      component: NotFoundPage,
    },
  ],
});

router.afterEach(() => {
  window.scrollTo(0, 0); // Прокрутка страницы к верху
});

export default router;
