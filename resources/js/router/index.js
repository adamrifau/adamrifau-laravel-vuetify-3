import { createWebHistory, createRouter } from "vue-router";
import Welcome from '../pages/Welcome.vue'

const routes = [
    {
        path: '/bracket/welcome',
        name: 'Welcome',
        component: Welcome
    },

]

const router = createRouter({
    linkExactActiveClass: 'active',
    history: createWebHistory(),
    routes,
  });

export default router;