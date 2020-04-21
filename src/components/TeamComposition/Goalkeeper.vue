<template>
    <div class="card">
        <div class="card-body">

            <div class="card__image">
                <div id="slider" class="slider">
                    <div class="slider__wrap">
                        <swiper :options="swiperOption" @slideChange="changeSwiperIndex" ref="mySwiper">
                            <swiper-slide class="slider__item"  v-for="(img, index, id) in players.goalkeeper"
                                          :key="index" :class="{active: id === active}">
                                <div class="cover" :style="{ backgroundImage: 'url(' + img.cover + ')' }"></div>
                            </swiper-slide>
                        </swiper>
                        <div class="slider__controls">
                            <div class="slider-btn slider-btn_prev" slot="button-prev">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                            </div>
                            <div class="slider-btn slider-btn_next" slot="button-next">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="statistics">
                <div class="statistics-body">
                    <div class="statistics__header">
                        <h2 class="statistics__head">
                            {{players.goalkeeper[active].name}}
                        </h2>
                        <div class="statistics__tagline">
                            <span class="statistics__subtitle">
                                {{players.goalkeeper[active].report.club}}
                            </span>
                            <span class="statistics__subtitle">/</span>
                            <span class="statistics__subtitle">
                                {{players.goalkeeper[active].report.country}}
                            </span>
                        </div>
                    </div>
                    <div class="statistics-counter">

                        <div class="statistics-counter__box">
                            <div class="statistics-counter__number">
                                {{players.goalkeeper[active].description.playedMinutes}}
                            </div>
                            <p class="statistics-counter__info">Сыгранных минут</p>
                        </div>

                        <div class="statistics-counter__box">
                            <div class="statistics-counter__number">
                                {{players.goalkeeper[active].description.passedGoals}}
                            </div>
                            <p class="statistics-counter__info">Пропущенные голы</p>
                        </div>

                        <div class="statistics-counter__box">
                            <div class="statistics-counter__number">
                                {{players.goalkeeper[active].description.saves}}
                            </div>
                            <p class="statistics-counter__info">Выигранный игр</p>
                        </div>
                    </div>
                    <div class="summary">
                        <transition-group name="staggered-fade" tag="ul" class="summary-list">
                            <li class="summary-list__item"
                                v-for="(item, i) in players.goalkeeper[active].brief" :key="i">
                                {{item}}
                            </li>
                        </transition-group>
                    </div>
                    <div class="btn-wrap">
                        <div class="btn btn_main" :class="{ 'btn_selected': players.goalkeeper[active].selected}"
                             @click="addPlayer('goalkeeper', players.goalkeeper[active])">
                            {{ players.goalkeeper[active].selected ? 'Выбран' : 'Добавить'}}
                        </div>
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
                active: 0,
                slider: '#slider',
                swiperOption: {
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.slider-btn_next',
                        prevEl: '.slider-btn_prev'
                    },
                    onSlideChangeEnd(swiper) {
                        this.onSwipe()
                    },
                }
            }
        },
        computed: {
            players() {
                return this.$store.getters.players;
            },
            swiper() {
                return this.$refs.mySwiper.swiper;
            },
            myTeam() {
                return this.$store.getters.teamWarehouse;
            }
        },
        methods: {
            addPlayer(player, item) {
                this.$store.dispatch('addPlayer', {player, item});
            },
            changeSwiperIndex() {
                this.active = this.swiper.activeIndex;
            }

        }
    }
</script>

<style lang="sass">


</style>