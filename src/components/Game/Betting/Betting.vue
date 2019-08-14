<template>
    <v-content>
        <v-container
                fluid
                fill-height
        >
            <v-layout
                    justify-center
                    align-center
                    class="board__money"
            >
                <v-btn class="ma-2" tile color="error" dark>{{ opponentRaised }}</v-btn>
            </v-layout>

            <v-layout
                    justify-center
                    align-center
            >
                <v-flex shrink>
                    <v-card class="betting">
                        <v-list rounded>
                            <v-subheader>전체 판돈 : {{ raisedSum }}</v-subheader>
                            <v-list-item-group color="primary">

                                <v-list-item>
                                    <v-list-item-content @click="goCall(opponentRaised, userRaised, raisedSum, startCallback, battleResult)">
                                        <v-list-item-title>콜</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content @click="goHalf(opponentRaised, userRaised, raisedSum, startCallback, battleResult)">
                                        <v-list-item-title>하프</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content @click="goBbing(opponentRaised, userRaised, raisedSum, startCallback, battleResult)">
                                        <v-list-item-title>삥</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content @click="goDdadang(opponentRaised, userRaised, raisedSum, startCallback, battleResult)">
                                        <v-list-item-title>따당</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content @click="goAllIn(opponentRaised, userRaised, raisedSum, userMoney, startCallback, battleResult)">
                                        <v-list-item-title>올인</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>다이</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>

            <v-layout
                    justify-center
                    align-center
                    class="board__money"
            >
                <v-btn class="ma-2" tile color="indigo" dark>{{ userRaised }}</v-btn>
            </v-layout>

        </v-container>
    </v-content>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "Betting",
        computed: {
            ...mapGetters(['userRaised','opponentRaised','raisedSum','userMoney',
                'userHand1','userHand2','opponentHand1','opponentHand2','battleResult'])
        },
        methods: {
            ...mapMutations(['called','half','bbing','ddadang','allIn','opponentCall','opponentHalf'
                            ,'opponentDdadang','opponentAllIn','opponentDie']),
            goCall: function (opponentRaising, userRaising, sumRaising, startCallback, battleResult) {
                this.called(opponentRaising)
                if(opponentRaising === userRaising){ alert(battleResult[0]) }
                else {
                    this._promise(true)
                        .then(function () {
                            startCallback(opponentRaising, opponentRaising, sumRaising - userRaising + opponentRaising, battleResult)
                        })
                }
            },
            goHalf: function (opponentRaising, userRaising, sumRaising, startCallback, battleResult) {
                this.half(sumRaising)
                this._promise(true)
                    .then(function () {
                        startCallback(opponentRaising, userRaising+sumRaising/2, sumRaising+sumRaising/2, battleResult)
                    })
            },
            goBbing: function (opponentRaising, userRaising, sumRaising, startCallback, battleResult) {
                this.bbing(100)
                this._promise(true)
                    .then(function () {
                        startCallback(opponentRaising, userRaising+100, sumRaising+100, battleResult)
                    })
            },
            goDdadang: function (opponentRaising, userRaising, sumRaising, startCallback, battleResult) {
                this.ddadang(opponentRaising)
                this._promise(true)
                    .then(function () {
                        startCallback(opponentRaising, opponentRaising*2, (sumRaising-userRaising+opponentRaising)*2, battleResult)
                    })
            },
            goAllIn: function(opponentRaising, userRaising, sumRaising, userMoney, startCallback, battleResult){
                this.allIn()
                this._promise(true)
                    .then(function () {
                        startCallback(opponentRaising, userRaising+userMoney, sumRaising+userMoney, battleResult)
                    })
            },
            _promise : function (param) {
                return new Promise(function (resolve, reject) {
                    window.setTimeout(function () {
                        if (param) {
                            resolve("해결 완료");
                        }
                        else {
                            reject(Error("실패!!"));
                        }
                    }, 3000);
                });
            },
            startCallback : function (opponentRaising, userRaising, sumRaising, battleResult) {
                let random = Math.floor(Math.random() * (10) + 1)

                if( 1 <= random && random <= 4){
                    if(opponentRaising===userRaising){alert(battleResult[0])}
                    else {
                        this.opponentCall(userRaising)
                    }
                    console.log('콜')
                }
                if( 5<= random && random <=6){
                    this.opponentHalf(sumRaising)
                    console.log('하프')
                }
                if(random === 7){
                    this.opponentDdadang(userRaising)
                    console.log('따당')
                }
                if(random === 8){
                    this.opponentAllIn()
                    console.log('올인')
                }
                if(9<= random && random <=10){
                    alert('상대가 다이를 쳤어요')
                }
            },
        },
        data () {
            return {
                items: [
                    {
                        text : "콜"
                    },
                    {
                        text : "하프"
                    },
                    {
                        text : "삥"
                    },
                    {
                        text : "따당"
                    },
                    {
                        text : "다이"
                    },
                    {
                        text : "올인"
                    },
                ]
            }
        },
    }
</script>

<style scoped>
    .betting {
        width: 200px;
    }
    .board__money {
        width: 207px;
    }
</style>