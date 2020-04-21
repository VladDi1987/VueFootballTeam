<template>
    <component :is="currentPage"></component>
</template>

<script>
    import StartScreen from './GameParts/Main.vue'
    import Order from './GameParts/Order.vue'
    import Main from './GameParts/Area.vue'
    import Result from './GameParts/Result.vue'

    export default {
        components: {
            appOrder: Order,
            appMain: Main,
            appResult: Result
        },
        computed: {
            currentPage() {
                return this.$store.getters.currentPage;
            }
        }

    }
</script>

<style lang="sass">
    @import "../assets/sass/variables.sass"
</style>