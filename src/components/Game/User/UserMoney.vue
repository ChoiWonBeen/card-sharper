<template>
    <div>
        <div class="user__money title">
            소지 금액 : {{ userMoney }}
        </div>
        <div class="user__betting font-weight-black display-1">
            {{ userBetting }}
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "UserMoney",
        computed: {
            ...mapGetters(['userMoney','start','userBetting'])
        }
    }
</script>

<style scoped>
    .user__money {
        text-align: right;
        margin-right: 300px;
        float: right;
    }
    .user__betting {
        float: left;
        margin-left: 25%;
    }
</style>