<template>
    <div class="stage">
        <div class="stage-field">
            <div class="field ground">
                <div class="field__texture field__texture_gradient"></div>
                <div class="field__texture field__texture_gradient-b"></div>
                <div class="field__texture field__texture_grass"></div>
                <div class="field__line field__line_goal"></div>
                <div class="field__line field__line_goal field__line_goal--far"></div>
                <div class="field__line field__line_outline"></div>
                <div class="field__line field__line_penalty"></div>
                <div class="field__line field__line_penalty-arc"></div>
                <div class="field__line field__line_penalty-arc field__line_penalty-arc--far"></div>
                <div class="field__line field__line_mid"></div>
                <div class="field__line field__line_circle"></div>
                <div class="field__line field__line_penalty field__line_penalty--far"></div>
            </div>
            <div class="field__side field__side_front"></div>
        </div>
        <div class="stage-team">
            <div class="team">
                <template  v-for="(item, key, i) in teamStructure">
                    <transition-group name="player" class="team__row" :class="[`team__row_${key}`]" tag="div">
                        <div class="player" :key="index" v-for="(player, index) in item.people">
                            <div class="player__img" :style="{ backgroundImage: 'url(' + player.cover + ')'}"></div>
                            <div class="player__name">{{ player.name }}</div>
                            <span class="player__remove" v-if="canRemove" @click="removePlayer(key, index, player.id)"></span>
                        </div>
                    </transition-group>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            teamStructure: Object,
            canRemove: Boolean
        },
        methods: {
            removePlayer(key, index, id) {
                this.$store.commit('removePlayer', {key, index, id});
            }
        }
    }
</script>

<style lang="sass">
    @import "../assets/sass/variables.sass"

</style>