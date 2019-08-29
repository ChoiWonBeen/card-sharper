<template>
    <v-list-item v-if="(turn === 0) && (userMoney >= userRaised)">
        <v-tooltip right>
            <template v-slot:activator="{ on }">
                <v-list-item-content v-on="on" @click="goBbing(opponentRaised, userRaised, raisedSum, startCallback, battleResult)">
                    <v-list-item-title>삥</v-list-item-title>
                </v-list-item-content>
            </template>
            <span>시작 베팅금인 <br>{{ userRaised }}원을 베팅합니다.</span>
        </v-tooltip>
    </v-list-item>
</template>

<script>
    import bettingMethods from "../mixin/bettingMethods";
    export default {
        name: "bbing",
        mixins:[bettingMethods]
    }
</script>

<style scoped>

</style>