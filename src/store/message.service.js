export default {
    state: {
        loading: false,
        message: {
            show: false,
            // error & success (TODO: warrning)
            context: 'success',
            title: ''
        }
    },
    actions: {
        setLoading ({commit}, payload) {
            commit('setLoading', payload);
        },
        clearError ({commit}) {
            commit('clearError');
        },
        setMessage ({commit}, {context, title}) {
            commit('setMessage', {context, title});
        }
    },
    mutations: {
        setLoading (state, payload) {
            state.loading = payload;
        },
        clearError (state) {
            state.message.show = false;
        },
        setMessage(state, {context, title}) {
            state.message.show = true;
            state.message.context = context;
            state.message.title = title;
            setTimeout(() => {
                state.message.show = false;
            }, 2000)
        }
    },
    getters: {
        loading (state) {
            return state.loading;
        },
        error (state) {
            return state.error;
        },
        message (state) {
            return state.message;
        }
    }
}
