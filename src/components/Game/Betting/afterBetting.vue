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
                    @click="setCookie(userMoney)"
            >

                <template v-if="start==='open'">
                    <v-card
                            class="mx-auto my-12"
                            max-width="374"
                    >
                        <div v-if="(battleResult[3] === 1)">
                            <v-card-title>승리!</v-card-title>
                            <v-card-text>
                                <div>{{ battleResult[1] }} vs {{ battleResult[2] }}(으)로 당신이 이겼습니다.</div>

                                <div class="my-4 subtitle-1 black--text">
                                    $ • {{raisedSum}}원을 획득했습니다! (순이익:{{ opponentRaised }})
                                </div>
                            </v-card-text>
                        </div>

                        <div v-if="(battleResult[3] === 2)">
                            <v-card-title>패배..</v-card-title>
                            <v-card-text>
                                <div>{{ battleResult[1] }}(으)로 {{ battleResult[2] }}에게 당신이 졌습니다.</div>

                                <div class="my-4 subtitle-1 black--text">
                                    $ • {{ userRaised }}원을 잃었습니다. 다음엔 이겨야죠!
                                </div>
                            </v-card-text>
                        </div>

                        <div v-if="(battleResult[3] === 3)">
                            <v-card-title>무승부!</v-card-title>
                            <v-card-text>
                                <div>{{ battleResult[0] }}</div>

                                <div class="my-4 subtitle-1 black--text">
                                    $ • {{ raisedSum }}원이 다음 게임의 판돈이 됩니다.
                                </div>
                            </v-card-text>
                        </div>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text v-if="(battleResult[3]=== 1 || battleResult[3]=== 2)">
                            <div class="title text--primary">판돈을 정하세요!</div>
                            <v-chip-group
                                    v-model="selection"
                                    active-class="deep-purple accent-4 white--text"
                                    column
                            >
                                <v-chip>100</v-chip>
                                <v-chip>200</v-chip>
                                <v-chip>500</v-chip>
                                <v-chip>1000</v-chip>
                            </v-chip-group>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                    color="deep-purple accent-4"
                                    text
                                    @click="ReStart(selection)"
                                    v-if="(battleResult[3]===1 || battleResult[3]=== 2)"
                            >
                                시작!
                            </v-btn>
                            <v-btn
                                    color="deep-purple accent-4"
                                    text
                                    @click="ReMatch(raisedSum)"
                                    v-if="(battleResult[3]===3)"
                            >
                                재경기!
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </template>

                <template v-if="start==='userDie'">
                    <v-card
                            class="mx-auto my-12"
                            max-width="374"
                    >
                        <div>
                            <v-card-title>다이..</v-card-title>
                            <v-card-text>
                                <div class="my-4 subtitle-1 black--text">
                                    $ • {{ userRaised }}원을 잃었습니다..
                                </div>
                            </v-card-text>
                        </div>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text>
                            <div class="title text--primary">판돈을 정하세요!</div>
                            <v-chip-group
                                    v-model="selection"
                                    active-class="deep-purple accent-4 white--text"
                                    column
                            >
                                <v-chip>100</v-chip>
                                <v-chip>200</v-chip>
                                <v-chip>500</v-chip>
                                <v-chip>1000</v-chip>
                            </v-chip-group>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                    color="deep-purple accent-4"
                                    text
                                    @click="ReStart(selection)"
                            >
                                시작!
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </template>

                <template v-if="start==='opponentDie'">
                    <v-card
                            class="mx-auto my-12"
                            max-width="374"
                    >
                        <div>
                            <v-card-title>상대의 다이!</v-card-title>
                            <v-card-text>
                                <div class="my-4 subtitle-1 black--text">
                                    $ • {{ opponentRaised }}원을 벌었습니다!
                                </div>
                            </v-card-text>
                        </div>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text>
                            <div class="title text--primary">판돈을 정하세요!</div>
                            <v-chip-group
                                    v-model="selection"
                                    active-class="deep-purple accent-4 white--text"
                                    column
                            >
                                <v-chip>100</v-chip>
                                <v-chip>200</v-chip>
                                <v-chip>500</v-chip>
                                <v-chip>1000</v-chip>
                            </v-chip-group>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                    color="deep-purple accent-4"
                                    text
                                    @click="ReStart(selection)"
                            >
                                시작!
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </template>

            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "afterBetting",
        data : function () {
            return {
                selection: {
                    default:100,
                    type: Number
                }
            }
        },
        methods: {
            ...mapMutations(['shuffle','clickStart','clickReStart']),
            ReStart: function (selection) {
                let raising
                if(selection=== 0){
                    raising = 100
                }
                else if(selection=== 1){
                    raising = 200
                }
                else if(selection=== 2){
                    raising = 500
                }
                else if(selection=== 3){
                    raising = 1000
                }
                else{
                    raising = 100
                }
                this.clickStart(['yes',raising])
                this.shuffle()
            },
            ReMatch: function (raisingSum) {
                this.clickReStart(['yes',raisingSum])
                this.shuffle()
            },
            setCookie: function (userMoney){
                let date = new Date()
                date.setTime(date.getTime()+(7*24*60*60*1000));
                document.cookie="userMoney=" + userMoney + "; expires=" +date.toGMTString()+"; path='/';"
            }
        },
        computed: {
            ...mapGetters(['raisedSum','opponentRaised','userRaised','battleResult','start','userMoney'])
        }
    }
</script>

<style scoped>

</style>