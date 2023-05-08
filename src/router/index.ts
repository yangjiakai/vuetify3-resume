import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/resume",
    },
    // this page is a sample page for api calling
    {
      path: "/unsplash",
      component: () =>
        import(
          /* webpackChunkName: "app-unsplash" */ "@/views/UnsplashApp.vue"
        ),
    },
    // this page is sample page for layout
    {
      path: "/ui",
      name: "ui",
      component: () =>
        import(/* webpackChunkName: "app-ui" */ "@/views/UI.vue"),
    },
    {
      path: "/resume_zh",
      name: "resume",
      component: () =>
        import(/* webpackChunkName: "app-resume" */ "@/views/Resume.vue"),
    },
    {
      path: "/resume",
      name: "resume-jp",
      component: () =>
        import(/* webpackChunkName: "app-resume-jp" */ "@/views/ResumeJP.vue"),
    },
  ],
});

export default router;
