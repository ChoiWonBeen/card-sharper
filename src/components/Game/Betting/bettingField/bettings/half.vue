<template>
    <v-list-item v-if="(userMoney >= raisedSum/2)">
        <v-tooltip right>
            <template v-slot:activator="{ on }">
                <v-list-item-content v-on="on" @click="goHalf(opponentRaised, userRaised, raisedSum, startCallback, battleResult)">
                    <v-list-item-title>하프</v-list-item-title>
                </v-list-item-content>
            </template>
            <span>판돈의 절반인 <br>{{ raisedSum/2 }}원을 베팅합니다.</span>
        </v-tooltip>
    </v-list-item>
</template>

<script>
    import bettingMethods from "../mixin/bettingMethods";

    export default {
        name: "half",
        mixins:[bettingMethods]
    }
</script>

<style scoped>

</style>