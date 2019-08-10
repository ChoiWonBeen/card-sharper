<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawerRight"
                app
                clipped
                right
        >
            <v-list dense>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-content>
                        <v-list-item-title>잔액</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list dense>
                <v-list-item @click.stop="left = !left">
                    <v-list-item-content>
                        <v-list-item-title>족보</v-list-item-title>
                        <img src="@/assets/pedigree1.png" alt="족보" style="width: 224px">
                        <img src="@/assets/pedigree2.png" alt="족보" style="width: 250px">
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer
                v-model="left"
                fixed
                temporary
        ></v-navigation-drawer>

        <opponent-field></opponent-field>
        <opponent-money></opponent-money>
        <betting></betting>
        <user-money></user-money>
        <user-field></user-field>

        <v-navigation-drawer
                v-model="right"
                fixed
                right
                temporary
        ></v-navigation-drawer>

        <fnb></fnb>
    </v-app>
</template>

<script>
    import fnb from "../Nav/fnb"
    import OpponentField from "./Opponent/OpponentField.vue"
    import OpponentMoney from "./Opponent/OpponentMoney"
    import Betting from "./Betting/Betting"
    import UserField from "./User/UserField"
    import UserMoney from "./User/UserMoney"

    export default {
        props: {

        },
        components: {
            'fnb' : fnb,
            'opponent-field': OpponentField,
            'opponent-money': OpponentMoney,
            'betting': Betting,
            'user-field':UserField,
            'user-money':UserMoney
        },
        data: () => ({
            drawer: null,
            drawerRight: null,
            right: false,
            left: false,
        }),
    }
</script>

<style scoped>

</style>