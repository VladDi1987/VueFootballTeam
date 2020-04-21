import Vue from 'vue'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import dataService from './data.service'
import userService from './user.service'
import teamService from './team.service'
import messageService from './message.service'


Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);

const State = new Vuex.Store({
    modules: {
        dataService,
        userService,
        teamService,
        messageService
    }
});

export default State;