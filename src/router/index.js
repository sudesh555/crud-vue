import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentView from "../views/Students/View.vue";
import StudentCreate from "../views/Students/Create.vue";
import StudentEdit from "../views/Students/Edit.vue";
import StaffView from "../views/Staffs/View.vue";
import StaffEdit from "../views/Staffs/Edit.vue";
import StaffCreate from "../views/Staffs/Create.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/students",
      name: "Students",
      component: StudentView,
    },
    {
      path: "/students/create",
      name: "StudentCreate",
      component: StudentCreate,
    },
    {
      path: "/students/:id/edit",
      name: "StudentEdit",
      component: StudentEdit,
    },
    {
      path: "/staffs",
      name: "Staffs",
      component: StaffView,
    },
    {
      path: "/staffs/:id/edit",
      name: "StaffEdit",
      component: StaffEdit,
    },
    {
      path: "/staffs/create",
      name: "StaffCreate",
      component: StaffCreate,
    },
  ],
});

export default router;
