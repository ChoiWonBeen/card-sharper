<template>
    <div v-if="(start!=='no')">
        <div class="opponent__money title money__box">
            &#8361;{{ numberWithCommas(opponentMoney) }}
        </div>
        <div class="opponent__betting font-weight-black display-1" style="color: white">
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
    .money__box{
        background-color: #40393b;
        border-radius: 30px;
        box-shadow: 0px 0px 30px red;
        color: cornsilk;
        padding: 15px;
        left: 50px;
        display: inline-block;
    }
</style>