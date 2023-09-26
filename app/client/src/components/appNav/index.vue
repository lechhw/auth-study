<template>
    <div class="gnb">
        <router-link to="/user/login"> 로그인 </router-link>
        <router-link to="/dashboard"> 대시보드 </router-link>
    </div>
</template>

<script>
export default {
    name: 'comp-app-nav',

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
