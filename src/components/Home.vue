<template>
    <div class="home min-height">
        <div class="home__wrap container">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile">
                        <div class="profile__img"></div>
                        <div class="profile__content">
                            <h1 class="profile__name">{{ userProfile.name }}</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="user-team">
                        <div class="command">
                            <app-football-field :teamStructure="teamStructure"
                                                :canRemove="false">
                            </app-football-field>
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
               profile: {}
            }
        },
        computed: {
            teamStructure() {
                return this.$store.getters.userTeam;
            },
            userProfile() {
                return this.$store.getters.userData;
            }
        },
        methods: {
            myFunctionOnLoad() {
                console.log('call on load...');
            }
        },
        created() {
            this.myFunctionOnLoad();
        },
    }
</script>

<style lang="sass" scoped></style>