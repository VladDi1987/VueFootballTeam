<template>
    <div id="auth" class="modal">
        <div class="modal__wrap modal__wrap_auth">
            <form @submit.prevent="onSubmit">
                <h3 class="form__title text-center">Авторизация</h3>
                <div class="form__container">
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

                    <div class="form__footer">
                        <button type="submit" class="btn btn_main btn_submit">Войти</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {required, email, minLength} from "vuelidate/lib/validators"

    export default {
        data() {
            return {
                email: '',
                password: '',
                submitted: false
            }
        },
        validations: {
            email: {required, email},
            password: {required, minLength: minLength(6)}
        },
        methods: {
            onSubmit() {
                this.submitted = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                } else {
                    // User
                    const user = {
                        email: this.email,
                        password: this.password
                    };
                    this.$store.dispatch('loginUser', user)
                        .then(() => {
                            this.$store.dispatch('loginUser', user);
                            // Message
                            let message = {
                                context: 'success',
                                title: 'Добро пожаловать'
                            };
                            this.$store.dispatch('setMessage', message);
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