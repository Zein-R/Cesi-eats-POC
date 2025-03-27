import { createRouter, createWebHistory } from 'vue-router' 
import CartView from "../../views/CartView.vue";
import HomeView from "../../views/HomeView.vue";
import RestaurantView from "../../views/RestaurantView.vue";
import LoginView from "../../views/LoginView.vue";
import SignInView from "../../views/SignInView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/restaurants',
            name: 'restaurants',
            component: RestaurantView
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },

        {
            path: '/sign',
            name: 'sign',
            component: SignInView,
        }
    ]
})

export default router