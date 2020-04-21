import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import MainPage from '../components/Wrapper.vue'
import Home from '../components/Home'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            name: '',
            component:  MainPage
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ],
    mode: 'history'
})
