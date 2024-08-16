import type {Router, RouteRecordRaw} from 'vue-router';
import {createRouter, createWebHistory} from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import CategoryListView from "@/views/CategoryListView.vue";
import AddCategoryView from "@/views/AddCategoryView.vue";
import CategoryDetailsView from "@/views/CategoryDetailsView.vue";
import AddTutorialView from "@/views/AddTutorialView.vue";
import TutorialsView from "@/views/TutorialsView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/categories',
        name: 'categories',
        component: CategoryListView
    },
    {
        path: '/categories/:id',
        name: 'category-details',
        component: CategoryDetailsView,
        props: true
    },
    {
        path: '/tutorials',
        name: 'tutorials',
        component: TutorialsView
    },
    {
        path: '/categories/add',
        name: 'categories-add',
        component: AddCategoryView
    },
    {
        path: '/tutorials/add',
        name: 'tutorials-add',
        component: AddTutorialView
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
];

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router;

