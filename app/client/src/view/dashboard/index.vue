<template>
    <div>대시보드</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'page-dashboard',

    data() {
        return {};
    },

    mounted() {
        this.fetchData();
    },

    methods: {
        fetchData() {
            let params = {
                id: 'test',
                pw: '12345',
            };
            axios
                .post('/api/test', params)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>
