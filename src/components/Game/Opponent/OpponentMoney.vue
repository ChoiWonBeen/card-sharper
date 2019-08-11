<template>
    <div class="opponent__money" v-if="(start==='yes')">
        소지 금액 : {{ opponentMoney }}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "OpponentMoney",
        computed: {
            ...mapGetters(['opponentMoney','start'])
        }
    }
</script>

<style scoped>
    .opponent__money {
        margin-left: 300px;
    }
</style>