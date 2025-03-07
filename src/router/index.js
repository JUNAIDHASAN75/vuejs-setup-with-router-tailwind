import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
{ path: '/',
    name: 'Home',
    component: Home 
},
{
    path:'/about',
    name:'About',
    component: About
}
//   { path: '/about', name: 'About', component: () => import('../views/About.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
