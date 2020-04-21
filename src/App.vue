<template>
    <div class="page">
        <router-view :class="{blur: loading}">
        </router-view>

        <app-loader v-if="loading">
        </app-loader>

        <div class="message"
             v-if="messageShow"
             :class="[{ 'message_success': messageContext === 'success' }, {'message_error': messageContext === 'error' }]">
            <div class="message-content">
                <span class="message-title">{{ messageTitle }}</span>
                <span class="message-close" @click="closeError"></span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        computed: {
            loading () {
                return this.$store.getters.loading;
            },
            error() {
                return this.$store.getters.error;
            },
            messageShow () {
                return this.$store.getters.message.show;
            },
            messageTitle () {
                return this.$store.getters.message.title;
            },
            messageContext () {
                return this.$store.getters.message.context;
            }
        },
        methods: {
            closeError() {
                this.$store.dispatch('clearError');
            }
        }
    }
</script>

<style lang="sass">
    @import "/assets/sass/variables.sass"
</style>
