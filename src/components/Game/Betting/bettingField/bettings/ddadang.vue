<template>
    <v-list-item v-if="(userMoney >= opponentRaised*2 - userRaised)">
        <v-tooltip right>
            <template v-slot:activator="{ on }">
                <v-list-item-content v-on="on" @click="goDdadang(opponentRaised, userRaised, raisedSum, startCallback, battleResult)">
                    <v-list-item-title>따당</v-list-item-title>
                </v-list-item-content>
            </template>
            <span>상대 베팅금의 두 배인 <br>{{ opponentRaised*2 - userRaised }}원을 베팅합니다.</span>
        </v-tooltip>
    </v-list-item>
</template>

<script>
    import bettingMethods from "../mixin/bettingMethods";
    export default {
        name: "ddadang",
        mixins:[bettingMethods]
    }
</script>

<style scoped>

</style>