import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({

    history:createWebHistory(),

    routes:[

        {
            path:'/home',
            name:'Home',
            component:
            ()=>import('../pages/Home/Home.vue')
        },

        {
            path:'/reading',
            name:'Reading',
            component:
            ()=>import('../pages/Reading/Reading.vue')
        },

        {
            path:'/result',
            name:'Result',
            component:
            ()=>import('../pages/Result/Result.vue')
        },

        {
            path:'/profile',
            name:'Profile',
            component:
            ()=>import('../pages/Profile/Profile.vue')
        },

        {
            path:'/subscription',
            name:'Subscription',
            component:
            ()=>import('../pages/Subscription/Subscription.vue')
        },

        {
            path:"/",
            component:
            ()=>import("@/pages/Landing/Landing.vue")
        }
    ]

})


export default router