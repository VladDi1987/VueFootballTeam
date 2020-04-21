<template>
    <div class="main min-height">
        <div class="main__wrap">
            <header class="header">
                <div class="header__wrap">
                    <div class="header-logo">
                        <img src="../../assets/static/img/logo2.png" alt="logo">
                    </div>
                    <div class="header-nav">
                        <ul class="menu">
                            <li class="menu__item" v-if="checkUser" @click="redirectToHome">Home</li>
                            <li class="menu__item" v-if="!checkUser" @click="onLogin">Login</li>
                            <li class="menu__item" v-if="checkUser" @click="onLogout">Logout</li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="main__container">
                <div class="main__column main__column_left">
                    <div class="main__content">
                        <h1 class="main__title">Команда года</h1>
                        <h2 class="main__subtitle">Кто если не ты сможешь её собрать</h2>
                        <div class="btn-wrap">
                            <div class="btn btn_main" @click="onStart">
                                Собрать команду
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main__column main__column_right">
                    <img src="../../assets/static/img/3players.png" alt="">
                </div>
            </div>
        </div>

        <transition name="modal">
            <div v-if="isOpen">
                <div class="modal__overlay" @click.self="isOpen = false">
                    <app-login>
                    </app-login>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import AppLogin from '../Auth/Login.vue';


    export default {
        data() {
            return {
                isOpen: false,
            }
        },
        components: {
            AppLogin: AppLogin
        },
        computed: {
            getUserTeam() {
                return this.$store.getters.userTem;
            },
            currentPage() {
                return this.$store.getters.currentPage;
            },
            checkUser() {
                return this.$store.getters.checkUser;
            },
            links() {
                if (this.checkUser) {
                    return [
                        {title: 'Home', url: '/home'},
                    ]
                }
                return [
                    {title: 'Login'},
                ]
            },
            messageShow() {
                return this.$store.getters.message.show;
            },
            messageTitle() {
                return this.$store.getters.message.title;
            },
            messageContext() {
                return this.$store.getters.message.context;
            }

        },
        methods: {
            redirectToHome() {
                this.$router.push('/home');
            },
            onStart() {
                this.$store.dispatch('setActivePage', 'AppOrder');
            },
            onLogin() {
                this.isOpen = !this.isOpen;
            },
            onLogout() {
                this.$store.dispatch('logoutUser');
                this.$router.push('/');
            }

        }
    }
</script>

<style lang="sass" scoped>

</style>