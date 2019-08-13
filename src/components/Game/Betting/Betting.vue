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
                                    <v-list-item-content @click="goCall(opponentRaised, userRaised)">
                                        <v-list-item-title>콜</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content @click="goHalf(raisedSum, raisedSum)">
                                        <v-list-item-title>하프</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content @click="goBbing(100)">
                                        <v-list-item-title>삥</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content @click="goDdadang(opponentRaised)">
                                        <v-list-item-title>따당</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content @click="goAllIn()">
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
    import {mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
        name: "Betting",
        computed: {
            ...mapGetters(['userRaised','opponentRaised','raisedSum'])
        },
        methods: {
            ...mapMutations(['called','half','bbing','ddadang','allIn','opponentCall','opponentHalf']),
            ...mapActions(['opponentTurn']),
            goCall: function (opponentRaising, userRaising) {
                this.called(opponentRaising)
                this.opponentTurn(userRaising)
            },
            goHalf: function (raising, raisedSum) {
                this.half(raising)
                this.opponentTurn(raisedSum)
            },
            goBbing: function (raising) {
                this.bbing(raising)
                this.opponentTurn()
            },
            goDdadang: function (opponentRaising) {
                this.ddadang(opponentRaising)
                this.opponentTurn()
            },
            goAllIn: function(){
                this.allIn()
                this.opponentTurn()
            },
            opponentTurn: function(need){
                this.opponentHalf(need)
                let waiting =  Math.floor(Math.random() * (10000 - 3000)) + 3000

                let random = Math.floor(Math.random() * (5) + 1)

                if(random === 1){

                }
                if(random === 2){

                }
                if(random === 3){

                }
                if(random === 4){

                }
                if(random === 5){

                }

                console.log(random)
            }
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