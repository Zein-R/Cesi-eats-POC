import { createRouter, createWebHistory } from 'vue-router' 
import CartView from "../../views/CartView.vue";
import HomeView from "../../views/HomeView.vue";
import RestaurantView from "../../views/RestaurantView.vue";

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
            component: CartView
        }
    ]
})

export default router