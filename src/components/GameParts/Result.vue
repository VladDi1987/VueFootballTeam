<template>
    <div class="min-height">
        <div class="result__wrap">
            <div class="result__column">
                <div class="btn-wrap">
                    <div class="btn btn_main" @click="isOpen = !isOpen">Подтвердить выбор</div>
                </div>
                <div class="btn-wrap">
                    <div class="btn btn_main" @click="onReset(getDefaultOrder)">начать заного</div>
                </div>
            </div>

            <div class="command">
                <app-football-field :teamStructure="teamStructure"
                                    :canRemove="false">
                </app-football-field>
            </div>
        </div>

        <transition name="modal">
            <div v-if="isOpen">
                <div class="modal__overlay" @click.self="isOpen = false">
                    <app-registration>
                    </app-registration>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import AppRegistration from '../Auth/Registration.vue'

    export default {
        data() {
            return {
                isOpen: false,
            }
        },
        components: {
            AppRegistration: AppRegistration
        },
        computed: {
            currentComponent() {
                return this.$store.getters.currentComponent;
            },
            teamStructure() {
                return this.$store.getters.teamStructure;
            },
            getDefaultOrder() {
                return this.$store.getters.defaultOrder;
            }
        },
        methods: {
            onReset(obj) {
                this.$store.dispatch('setOrder', obj);
                this.$store.dispatch('setActivePage', 'AppOrder');
                this.$store.dispatch('resetCounter', 0);
                this.$store.dispatch('clearTeam');
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>