<template>
    <v-app id="inspire">
        <right-pedigree></right-pedigree>
        <left-pedigree></left-pedigree>

        <opponent-field></opponent-field>
        <opponent-money></opponent-money>
        
        <before-betting v-if="(start === 'no')"></before-betting>
        <betting v-if="(start === 'yes')"></betting>
        <after-betting v-if="(start==='open' || start==='userDie' || start==='opponentDie')"></after-betting>

        <user-money></user-money>
        <user-field></user-field>

        <fnb></fnb>
    </v-app>
</template>

<script>
    import {mapGetters} from 'vuex'

    import fnb from "../Nav/fnb"
    import OpponentField from "./Opponent/OpponentField.vue"
    import OpponentMoney from "./Opponent/OpponentMoney"
    import Betting from "./Betting/Betting"
    import UserField from "./User/UserField"
    import UserMoney from "./User/UserMoney"
    import leftPedigree from "./pedigree/leftPedigree"
    import rightPedigree from "./pedigree/rightPedigree"
    import beforeBetting from "./Betting/beforeBetting"
    import afterBetting from "./Betting/afterBetting"

    export default {
        props: {

        },
        components: {
            'fnb' : fnb,
            'opponent-field': OpponentField,
            'opponent-money': OpponentMoney,
            'betting': Betting,
            'user-field':UserField,
            'user-money':UserMoney,
            'left-pedigree':leftPedigree,
            'right-pedigree':rightPedigree,
            'before-betting':beforeBetting,
            'after-betting':afterBetting
        },
        computed: {
            ...mapGetters(['start'])
        }
        
    }
</script>

<style scoped>

</style>