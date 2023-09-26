<template>
    <div class="content">
        <div class="login">
            <form class="form" @submit.prevent="onSubmit">
                <div class="id-area">
                    <label for="input_id">ID</label>
                    <input id="input_id" type="text" v-model="input.id" />
                </div>
                <div class="pw-area">
                    <label for="input_pw">PW</label>
                    <input id="input_pw" type="password" autocomplete="off" v-model="input.pw" />
                </div>
                <button class="submit-button" type="submit">login</button>
                <router-link to="/user/register" class="register-button">register</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'page-login',

    data() {
        return {
            input: {
                id: '',
                pw: '',
            },
        };
    },

    mounted() {},

    methods: {
        onSubmit() {
            if (!this.input.id || !this.input.pw) return;
            const params = {
                ...this.input,
            };
            axios
                .post('/api/login', params)
                .then((res) => {
                    console.log('login', res);
                    if (res.data.success) {
                        // alert('사용자 등록 성공');
                        // this.$router.push('/user/login');
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../style.scss';
</style>
