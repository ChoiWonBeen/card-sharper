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
                        <v-list-item-title>특수 족보</v-list-item-title>
                        <img src="@/assets/pedigreeImage/ddangKiller.png" alt="족보" style="width: 224px">
                        (3월과 7월) 땡잡이. <br>장땡을 제외한 땡을 전부 이긴다.
                        <img src="@/assets/pedigreeImage/94.png" alt="족보" style="width: 224px">
                        (4월과 9월) 구사. <br>광땡 밑으로는 재경기를 진행한다.
                        <img src="@/assets/pedigreeImage/crazy94.png" alt="족보" style="width: 224px">
                        (4월과 9월 열끗) 멍텅구리 구사. <br>38광땡을 제외한 모든 패와 재경기.
                        <img src="@/assets/pedigreeImage/kddangKiller.png" alt="족보" style="width: 224px">
                        (4월과 7월 열끗) 암행어사. <br>18,13광땡 이긴다.
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
                        <img src="@/assets/pedigreeImage/38kd.png" alt="38광땡" style="width: 224px">
                        (3광과 8광) 38광땡.
                        <img src="@/assets/pedigreeImage/kddang.png" alt="광땡" style="width: 224px">
                        (1광을 포함한 광 2개) 광
                        <img src="@/assets/pedigreeImage/ddang.png" alt="땡" style="width: 224px">
                        (같은 월 두장) 땡
                        <img src="@/assets/pedigreeImage/ally.png" alt="알리" style="width: 224px">
                        (1월과 2월) 알리
                        <img src="@/assets/pedigreeImage/dok4.png" alt="독사" style="width: 224px">
                        (1월과 4월) 독사
                        <img src="@/assets/pedigreeImage/9bbing.png" alt="구삥" style="width: 224px">
                        (1월과 9월) 구삥
                        <img src="@/assets/pedigreeImage/jangbbing.png" alt="장삥" style="width: 224px">
                        (1월과 10월) 장삥
                        <img src="@/assets/pedigreeImage/jang4.png" alt="장사" style="width: 224px">
                        (4월과 10월) 장사
                        <img src="@/assets/pedigreeImage/4ryuk.png" alt="세륙" style="width: 224px">
                        (4월과 6월) 세륙
                        <img src="@/assets/pedigreeImage/gapo.png" alt="갑오" style="width: 224px">
                        (두 월을 더한 값의 일의 자리가 9) 갑오
                        <img src="@/assets/pedigreeImage/kkut.png" alt="끗" style="width: 224px">
                        (위 족보들이 아닐 때) 끗 <br> 두 월을 더한 값의 일의 자리가 클 수록 높은 값.
                        <img src="@/assets/pedigreeImage/mang.png" alt="망통" style="width: 224px">
                        (두 월을 더한 값의 일의 자리가 10) 망통
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