<template>
    <v-list-item v-if="(turn) && (userMoney >= opponentRaised - userRaised)" >
        <v-tooltip right>
            <template v-slot:activator="{ on }">
                <v-list-item-content v-on="on" @click="goCall(opponentRaised, userRaised, raisedSum, startCallback, battleResult)">
                    <v-list-item-title>콜</v-list-item-title>
                </v-list-item-content>
            </template>
            <span>끝내기를 요청하며 <br>{{ opponentRaised - userRaised}}원을 베팅합니다.</span>
        </v-tooltip>
    </v-list-item>
</template>

<script>
    import bettingMethods from "../mixin/bettingMethods";
    export default {
        name: "call",
        mixins:[bettingMethods]
    }
</script>

<style scoped>

</style>