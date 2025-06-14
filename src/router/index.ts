import { createRouter, createWebHistory } from "vue-router";

import DaisyView from "../views/DaisyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("@/Layouts/MenuLayout.vue"),
      children: [
        {
          path: "/",
          name: "Daisy",
          component: DaisyView,
        },
        {
          path: "/projects/:id",
          name: "ProjectTasks",
          component: () => import("@/views/ProjectTaskView.vue"),
        },
      ],
    },
  ],
});

export default router;
