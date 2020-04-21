import firebase from 'firebase/app'

export default {
    state: {
        team: {},
        user: {},
        currentPage: "AppMain",
        teamOrders: [
            {
                title: '4-4-2',
                order: {
                    defender: 4,
                    midfielder: 4,
                    striker: 2
                }
            },
            {
                title: '3-5-2',
                order: {
                    defender: 3,
                    midfielder: 5,
                    striker: 2
                }
            },
            {
                title: '4-3-4',
                order: {
                    defender: 4,
                    midfielder: 3,
                    striker: 4
                }
            },
            {
                title: '4-3-3',
                order: {
                    defender: 4,
                    midfielder: 3,
                    striker: 3
                }
            },
            {
                title: '4-5-1',
                order: {
                    defender: 4,
                    midfielder: 5,
                    striker: 1
                }
            }
        ],
        defaultOrder: {
            defender: 0,
            midfielder: 0,
            striker: 0
        },
        playersList: [
            {
                title: 'Вратари',
                component: 'AppGoalkeeper'
            },
            {
                title: 'Защитники',
                component: 'AppDefenders'
            },
            {
                title: 'Полузашитники',
                component: 'AppMidfielders'
            },
            {
                title: 'Нападающие',
                component: 'AppStrikers'
            },
            {
                title: 'Тренера',
                component: 'AppCoach'
            },
        ]
    },
    actions: {
        setActivePage(context, page) {
            context.commit('setCurrentPage', page);
        },
        async addData({commit}, payload) {
            commit('clearError');
            commit('setLoading', true);
            try {
                const team = await firebase.database().ref('teams').push(payload);
            } catch (error) {
                commit('setLoading', false);
                commit('setMessage', {context: 'error', title: error.message});
                throw error
            }
        },
        async fetchData ({commit}) {
            commit('clearError');
            commit('setLoading', true);

            const result = {};

            try {
                const fbVal = await firebase.database().ref('teams').once('value');
                const list = fbVal.val();
                Object.keys(list).forEach(key => {
                    Object.assign(result, list[key]);
                });
                commit('fetchData', result);
                commit('setLoading', false)
            } catch (error) {
                commit('setMessage', {context: 'error', title: error.message});
                commit('setLoading', false);
                throw error
            }
        },
    },
    mutations: {
        setCurrentPage: (state, value) => {
            state.currentPage = value;
        },
        fetchData(state, payload) {
            state.team = payload.team;
            state.user = payload.user;
        }
    },
    getters: {
        currentPage(state) {
            return state.currentPage;
        },
        defaultOrder(state) {
            return state.defaultOrder;
        },
        teamOrders(state) {
            return state.teamOrders;
        },
        playersList(state) {
            return state.playersList;
        },
        userTeam(state){
            return state.team;
        },
        userData(state) {
            return state.user;
        }
    }
}