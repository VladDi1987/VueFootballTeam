<template>
    <div class="order min-height">
        <div class="order__wrap">
            <h2 class="order__title">Выбери схему</h2>
            <div class="order__items">
                <figure class="order__figure" v-for="item of teamOrders"
                        @click="chooseTeamOrder(item.order)">
                    <div class="order__image">
                        <div class="order__row" v-for="index of item.order">
                            <div class="order__dot" v-for="i of index"></div>
                        </div>
                    </div>
                    <figcaption class="order__caption text-center">
                        {{item.title}}
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            teamOrders() {
                return this.$store.getters.teamOrders;
            },
            currentComponent() {
                return this.$store.getters.currentComponent;
            }
        },
        methods: {
            chooseTeamOrder(obj) {
                this.$store.dispatch('setOrder', obj);
                this.$store.dispatch('setActivePage', 'AppArea');
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/variables"
</style>