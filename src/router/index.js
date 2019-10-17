import Vue from 'vue';
import VueRouter from 'vue-router';
import StyleTransform from "../pages/StyleTransform";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/StyleTransform'
        },
        {
            path: '/StyleTransform',
            name: 'StyleTransform',
            component: StyleTransform,
        }
    ]
})