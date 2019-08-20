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

                                <v-list-item v-if="(turn)" >
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on }">
                                            <v-list-item-content v-on="on" @click="goCall(opponentRaised, userRaised, raisedSum, startCallback, battleResult)">
                                                <v-list-item-title>콜</v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                        <span>끝내기를 요청하며 <br>{{ opponentRaised - userRaised}}원을 베팅합니다.</span>
                                    </v-tooltip>
                                </v-list-item>

                                <v-list-item>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on }">
                                            <v-list-item-content v-on="on" @click="goHalf(opponentRaised, userRaised, raisedSum, startCallback, battleResult)">
                                                <v-list-item-title>하프</v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                        <span>판돈의 절반인 <br>{{ raisedSum/2 }}원을 베팅합니다.</span>
                                    </v-tooltip>
                                </v-list-item>

                                <v-list-item v-if="(turn === 0)">
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on }">
                                            <v-list-item-content v-on="on" @click="goBbing(opponentRaised, userRaised, raisedSum, startCallback, battleResult)">
                                                <v-list-item-title>삥</v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                        <span>시작 베팅금인 <br>{{ userRaised }}원을 베팅합니다.</span>
                                    </v-tooltip>
                                </v-list-item>

                                <v-list-item>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on }">
                                            <v-list-item-content v-on="on" @click="goDdadang(opponentRaised, userRaised, raisedSum, startCallback, battleResult)">
                                                <v-list-item-title>따당</v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                        <span>상대 베팅금의 두 배인 <br>{{ opponentRaised*2 - userRaised }}원을 베팅합니다.</span>
                                    </v-tooltip>
                                </v-list-item>

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
                'userHand1','userHand2','opponentHand1','opponentHand2','battleResult','turn'])
        },
        methods: {
            ...mapMutations(['called','half','bbing','ddadang','opponentCall','opponentHalf'
                            ,'opponentDdadang','opponentDie','betOpponent','betUser'
                            ,'youWin','youLose','youDraw', 'openCards','shuffle','nextTurn'
                            ,'opponentDie','userDie']),
            goCall: function (opponentRaising, userRaising, sumRaising, startCallback, battleResult) {
                this.called(opponentRaising)
                this.betUser('콜!')
                this.nextTurn()
                if(opponentRaising === userRaising){ this.endSet(battleResult, sumRaising) }
                else {
                    this._promise(true)
                        .then(function () {
                            startCallback(opponentRaising, opponentRaising, sumRaising - userRaising + opponentRaising, battleResult)
                        })
                }
            },
            goHalf: function (opponentRaising, userRaising, sumRaising, startCallback, battleResult) {
                this.half(sumRaising)
                this.betUser('하프!')
                this.nextTurn()
                this._promise(true)
                    .then(function () {
                        startCallback(opponentRaising, userRaising+sumRaising/2, sumRaising+sumRaising/2, battleResult)
                    })
            },
            goBbing: function (opponentRaising, userRaising, sumRaising, startCallback, battleResult) {
                this.bbing(userRaising)
                this.betUser('삥!')
                this.nextTurn()
                this._promise(true)
                    .then(function () {
                        startCallback(opponentRaising, userRaising*2, sumRaising+userRaising, battleResult)
                    })
            },
            goDdadang: function (opponentRaising, userRaising, sumRaising, startCallback, battleResult) {
                this.ddadang(opponentRaising)
                this.betUser('따당!')
                this.nextTurn()
                this._promise(true)
                    .then(function () {
                        startCallback(opponentRaising, opponentRaising*2, (sumRaising-userRaising+opponentRaising)*2, battleResult)
                    })
            },
            goDie: function(sumRaising){
                this.userDie()
                this.youLose(sumRaising)
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
                let random = Math.floor(Math.random() * (9) + 1)

                if( 1 <= random && random <= 4){
                    if(opponentRaising===userRaising){this.endSet(battleResult, sumRaising)}
                    else {
                        this.opponentCall(userRaising)
                    }
                    this.betOpponent('콜!')
                }
                if( 5 <= random && random <= 7){
                    this.opponentHalf(sumRaising)
                    this.betOpponent('하프!')
                }
                if( random === 8 ){
                    this.opponentDdadang(userRaising)
                    this.betOpponent('따당!')
                }
                if( random === 9 ){
                    this.betOpponent('다이..')
                    this.opponentDie()
                    this.youWin(sumRaising)
                }
            },
            endSet: function (battleResult, sumRaising) {
                this.openCards()
                if(battleResult[3]===1){
                    this.youWin(sumRaising)
                }
                else if(battleResult[3]===2){
                    this.youLose(sumRaising)
                }
                else if(battleResult[3]===3){

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