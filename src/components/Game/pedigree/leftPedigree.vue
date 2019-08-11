<template>
    <v-navigation-drawer
            app
    >
        <v-list dense>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>족보</v-list-item-title>
                    <img src="@/assets/pedigreeImage/38kd.png" alt="38광땡" style="width: 224px">
                    (3광과 8광) 38광땡.
                    <img src="@/assets/pedigreeImage/kddang.png" alt="광땡" style="width: 224px">
                    (1광을 포함한 광 2개) 광땡
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
</template>

<script>
    export default {
        name: "leftPedigree"
    }
</script>

<style scoped>

</style>