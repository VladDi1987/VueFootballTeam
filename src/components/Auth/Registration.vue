<template>
    <div class="modal">
        <div class="modal__wrap">
            <form @submit.prevent="onSubmit">
                <h3 class="form__title text-center">Регистрация</h3>
                <div class="form__container">
                    <div class="form__row">
                        <div class="form__label">Имя</div>
                        <div class="form__field">
                            <input type="text"
                                   v-model="name"
                                   class="input"
                                   :class="{'is-invalid': submitted && $v.name.$error}">
                            <div class="error-message" v-if="submitted && $v.name.$error">
                                <span class="error" v-if="!$v.name.required">Поле должно быть заполнено</span>
                            </div>
                        </div>
                    </div>
                    <div class="form__row">
                        <div class="form__label">Почта</div>
                        <div class="form__field">
                            <input type="email"
                                   v-model="email"
                                   class="input"
                                   :class="{'is-invalid': submitted && $v.email.$error}">
                            <div class="error-message" v-if="submitted && $v.email.$error">
                                <span class="error" v-if="!$v.email.required">Поле должно быть заполнено</span>
                                <span class="error" v-if="!$v.email.email">Email некорректный</span>
                            </div>
                        </div>
                    </div>
                    <div class="form__row">
                        <div class="form__label">Пароль</div>
                        <div class="form__field">
                            <input type="password"
                                   v-model="password"
                                   class="input"
                                   :class="{'is-invalid': submitted && $v.password.$error}">
                            <div class="error-message" v-if="submitted && $v.password.$error">
                                <span class="error" v-if="!$v.password.required">Поле должно быть заполнено</span>
                                <span class="error"
                                      v-if="!$v.password.minLength">Длина пароля {{ $v.password.$params.minLength }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="form__row">
                        <div class="form__label">Повторите пароль</div>
                        <div class="form__field">
                            <input type="password"
                                   v-model="confirmPassword"
                                   class="input"
                                   :class="{ 'is-invalid': submitted && $v.confirmPassword.$error}">
                            <div  class="error-message" v-if="submitted && $v.confirmPassword.$error" >
                                <span v-if="!$v.confirmPassword.required">Поле должно быть заполнено</span>
                                <span v-else-if="!$v.confirmPassword.sameAsPassword">Пароль не совпадает</span>
                            </div>
                        </div>
                    </div>

                    <div class="form__footer">
                        <button type="submit" :loading="loading" class="btn btn_main btn_submit">
                            Регистрация
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {required, email, minLength, sameAs} from "vuelidate/lib/validators";

    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                submitted: false
            }
        },
        validations: {
            name: {required, minLength: minLength(2)},
            email: {required, email},
            password: {required, minLength: minLength(6)},
            confirmPassword: {sameAsPassword: sameAs('password')}
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            },
            getTeam() {
                return this.$store.getters.teamStructure;
            }
        },
        methods: {
            onSubmit() {
                this.submitted = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                } else {
                    // User
                    const data = {
                        user: {
                            name: this.name,
                        },
                        team: this.getTeam
                    };
                    const user = {
                        email: this.email,
                        password: this.password
                    };
                    this.$store.dispatch('registerUser', user)
                      .then(() => {
                          let message = {
                              context: 'success',
                              title: 'Вы зарегистрированы'
                          };
                          this.$store.dispatch('setMessage', message);
                          this.$store.dispatch('addData',  data);
                          this.$router.push('/home');
                      })
                      .catch(error => {
                          this.$store.dispatch('setMessage', {context: 'error', title: error.message});
                      })
                }
            }
        }
    }
</script>

<style lang="sass"></style>