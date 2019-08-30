<template>
    <div v-if="(start!=='no')">
        <div class="user__money title money__box">
            &#8361;{{ numberWithCommas(userMoney) }}
        </div>
        <div class="user__betting font-weight-black display-1" style="color: white">
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
        },
        methods: {
            numberWithCommas : function (money) {
                return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }
</script>

<style scoped>
    .user__money {
        text-align: right;
        margin-right: 25%;
        float: right;
    }
    .user__betting {
        float: left;
        margin-left: 25%;
    }
    .money__box{
        background-color: #40393b;
        border-radius: 30px;
        box-shadow: 0px 0px 30px #2D8DBD;
        color: cornsilk;
        padding: 15px;
        left: 50px;
        display: inline-block;
    }
</style>