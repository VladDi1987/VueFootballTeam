import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import store from './store/index'
import router from './router'
// Firebase

import * as fb from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

// Components
import AppLoader from './components/Loader.vue'
import AppWrapper from './components/Wrapper.vue'
import AppHome from './components/Home.vue'
import AppMain from './components/GameParts/Main.vue'
import AppOrder from './components/GameParts/Order.vue'
import AppArea from './components/GameParts/Area.vue'
import AppResult from './components/GameParts/Result.vue'
import AppDefenders from './components/TeamComposition/Defenders.vue'
import AppGoalkeeper from './components/TeamComposition/Goalkeeper.vue'
import AppMidfielders from './components/TeamComposition/Midfielders.vue'
import AppStrikers from './components/TeamComposition/Strikers.vue'
import AppCoach from './components/TeamComposition/Coach.vue'
import AppFootballField from './components/FootballField.vue'

import AppLogin from './components/Auth/Login.vue'
import AppRegistration from './components/Auth/Registration.vue'

Vue.component('AppLoader', AppLoader);
Vue.component('AppWrapper', AppWrapper);
Vue.component('AppHome', AppHome);
Vue.component('AppMain', AppMain);
Vue.component('AppOrder', AppOrder);
Vue.component('AppArea', AppArea);
Vue.component('AppResult', AppResult);
Vue.component('AppDefenders', AppDefenders);
Vue.component('AppGoalkeeper', AppGoalkeeper);
Vue.component('AppMidfielders', AppMidfielders);
Vue.component('AppStrikers', AppStrikers);
Vue.component('AppCoach', AppCoach);
Vue.component('AppFootballField', AppFootballField);

Vue.component('AppLogin', AppLogin);
Vue.component('AppRegistration', AppRegistration);


Vue.use(
  Vuelidate,
);

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    created () {
        fb.initializeApp({
            apiKey: 'AIzaSyDw6ZMk3LAyXLlUB5mC3ituu1yeoP3DxqY',
            authDomain: 'test-168dd.firebaseapp.com',
            databaseURL: 'https://test-168dd.firebaseio.com',
            projectId: 'test-168dd',
            storageBucket: 'test-168dd.appspot.com',
            messagingSenderId: '850042721634',
            appId: '1:850042721634:web:f154246a742a2ffc'
        });
        this.$store.dispatch('fetchData')
    }
});
