<template>
    <div class="area min-height">
        <div class="area__wrap">
            <div class="area__container">
                <ul class="tab">
                    <li class="tab__item" v-for="tab in playersList"
                        :key="tab.component"
                        :class="{ 'active': tab.component === activeTab }"
                        @click="activeTab = tab.component">
                        {{ tab.title }}
                    </li>
                </ul>
                <transition name="fade" mode="out-in">
                    <component :is="activeTab">
                    </component>
                </transition>
            </div>

            <div class="curtain" :class="{'curtain_active': isActive}">
                <div class="curtain-line" v-model="showModal" @click="toggleClass">
                    <span class="curtain__counter"> {{ teamCounter }}</span>
                    <p>команда
                        <span class="curtain__arrow">
                           <i class="fa fa-chevron-left" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="command">
                    <app-football-field :teamStructure="teamStructure"
                                        :canRemove="true">
                    </app-football-field>
                </div>
            </div>

            <div class="message" v-if="isContinue">
                <div class="message-content">
                    <div class="btn btn_main" @click="teamComposed()">
                        Продолжить
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                isActive: false,
                el: '#tab',
                activeTab: 'AppGoalkeeper',
                isContinue: false,
                counter: null
            }
        },
        computed: {
            playersList () {
                return this.$store.getters.playersList;
            },
            teamCounter() {
                return this.counter = this.$store.getters.playersCounter;
            },
            showModal() {
                (this.counter >= 12) ? this.isContinue = true : this.isContinue = false;
            },
            teamStructure() {
                return this.$store.getters.teamStructure;
            }
        },
        methods: {
            teamComposed() {
                this.$store.dispatch('setActivePage', 'AppResult');
            },
            toggleClass() {
                this.isActive = !this.isActive;
            }
        }
    }
</script>

<style lang="sass">
    @import "../../assets/sass/variables"
</style>