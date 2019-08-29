<template>
    <div v-if="(start!=='no')">
        <div class="opponent__money title">
            소지 금액 : {{ numberWithCommas(opponentMoney) }}
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
        },
        methods: {
            numberWithCommas : function (money) {
                return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }
</script>

<style scoped>
    .opponent__money {
        margin-left: 25%;
        float: left;
    }
    .opponent__betting{
        float:right;
        margin-right: 29%;
    }
</style>