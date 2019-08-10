<template>
    <div class="opponent__money">
        소지 금액 : {{ this.$store.state.UserMoney }}
    </div>
</template>

<script>
    export default {
        name: "OpponentMoney"
    }
</script>

<style scoped>
    .opponent__money {
        margin-left: 256px;
    }
</style>