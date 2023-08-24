import {createRouter, createWebHistory} from 'vue-router'
import HostDetail from "@/views/HostDetail.vue";
import CheckItemDetail from "@/views/CheckItemDetail.vue";
import Collapsible from "@/views/Collapsible.vue";
import HostAddCheckItemDetail from "@/views/HostAddCheckItemDetail.vue";
import elementUITable from "@/views/elementUITable.vue";
import ElementDialog from "@/views/ElementDialog.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.history),
    routes: [
        {
            path: '/',
            redirect:'/host_detail'
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/host_detail',
            name: 'host_detail',
            component: HostDetail
        },
        {
            path: '/check_item_detail',
            name: 'check_item_detail',
            component: CheckItemDetail
        },
        {
            path: '/collapsible',
            name: 'collapsible',
            component: Collapsible
        },
        {
            path: '/host_add_check_item_detail',
            name: 'host_add_check_item_detail',
            component: HostAddCheckItemDetail
        },
        {
            path:'/eleUITable',
            name:'eleUITable',
            component:elementUITable,
        },
        {
            path:'/ElementDialog',
            name:'ElementDialog',
            component:ElementDialog,
        }

    ]
})

export default router
