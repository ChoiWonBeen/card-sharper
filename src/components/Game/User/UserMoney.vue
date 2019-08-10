<template>
    <div class="user__money">
        소지 금액 : {{ this.$store.state.UserMoney }}
    </div>
</template>

<script>
    export default {
        name: "UserMoney"
    }
</script>

<style scoped>
    .user__money {
        text-align: right;
        margin-right: 256px;
    }
</style>