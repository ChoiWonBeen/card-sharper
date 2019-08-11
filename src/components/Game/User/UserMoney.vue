<template>
    <div class="user__money" v-if="(start==='yes')">
        소지 금액 : {{ userMoney }}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "UserMoney",
        computed: {
            ...mapGetters(['userMoney','start'])
        }
    }
</script>

<style scoped>
    .user__money {
        text-align: right;
        margin-right: 300px;
    }
</style>