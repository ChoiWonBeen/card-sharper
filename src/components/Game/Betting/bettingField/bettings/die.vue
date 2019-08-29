<template>
    <v-list-item>
        <v-tooltip right>
            <template v-slot:activator="{ on }">
                <v-list-item-content v-on="on" @click="goDie(raisedSum)">
                    <v-list-item-title>다이</v-list-item-title>
                </v-list-item-content>
            </template>
            <span>베팅금을 잃고 게임을 포기합니다.</span>
        </v-tooltip>
    </v-list-item>
</template>

<script>
    import bettingMethods from "../mixin/bettingMethods";
    export default {
        name: "die",
        mixins:[bettingMethods]
    }
</script>

<style scoped>

</style>