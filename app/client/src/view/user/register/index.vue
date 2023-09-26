<template>
    <div class="content">
        <div class="register">
            <form class="form" @submit.prevent="onSubmit">
                <div class="id-area">
                    <label for="input_id">ID</label>
                    <input id="input_id" type="text" v-model="input.id" />
                </div>
                <div class="pw-area">
                    <label for="input_pw">PW</label>
                    <input id="input_pw" type="password" autocomplete="off" v-model="input.pw" />
                </div>
                <button class="submit-button" type="submit">Register</button>
                <router-link to="/user/login" class="register-button">login</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'page-register',

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
                .post('/api/register', params)
                .then((res) => {
                    if (res.data.success) {
                        alert('사용자 등록 성공');
                        this.$router.push('/user/login');
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
