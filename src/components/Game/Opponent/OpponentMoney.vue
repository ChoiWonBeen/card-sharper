<template>
    <div v-if="(start==='yes' || start==='open')">
        <div class="opponent__money title">
            소지 금액 : {{ opponentMoney }}
        </div>
        <div class="opponent__betting font-weight-black display-1">
            {{ opponentBetting }}
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "OpponentMoney",
        computed: {
            ...mapGetters(['opponentMoney','start','opponentBetting'])
        }
    }
</script>

<style scoped>
    .opponent__money {
        margin-left: 300px;
        float: left;
    }
    .opponent__betting{
        float:right;
        margin-right: 29%;
    }
</style>