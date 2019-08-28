<template>
    <v-content>
        <v-container
                fluid
                fill-height
        >
            <v-layout
                    justify-center
                    align-center
            >
                <v-card
                        max-width="450"
                        class="mx-auto"
                >
                    <v-container
                            class="pa-2"
                            fluid
                    >
                        <v-row>

                            <v-col
                                    v-for="(item, i) in items"
                                    :key="i"
                            >
                                <v-card
                                        :color="item.color"
                                        dark
                                >
                                    <v-list-item three-line>
                                        <v-list-item-content class="align-self-start">
                                            <v-list-item-title
                                                    class="headline mb-2"
                                                    v-text="item.title"
                                            ></v-list-item-title>

                                            <div v-text="item.artist"></div>
                                        </v-list-item-content>

                                        <v-list-item-avatar
                                                size="125"
                                                tile
                                        >
                                            <v-img :src="item.src"></v-img>
                                        </v-list-item-avatar>
                                    </v-list-item>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-btn
                            @click="startButton()"
                            style="float: right"
                            class="ma-2" tile color="primary" dark>
                                섯다 시작!
                    </v-btn>
                </v-card>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex'

    export default {
        name: "beforeBetting",
        computed: {
            ...mapGetters(['start'])
        },
        methods: {
            ...mapMutations(['clickStart','shuffle']),
            startButton : function () {
                this.clickStart(['yes', 100])
                this.shuffle()
            }
        },
        data: () => ({
            items: [
                {
                    color: '#385F73',
                    src: 'https://playgame-img.kakaogame.com/production/images/svgn-2019-06-25/15-41-39-272/appIcon.png',
                    title: '섯다를 체험해보세요!',
                    artist: '섯다는 두 플레이어의 패를 비교해 더 높은 족보를 가진 플레이어가 베팅한 돈을 갖는 아주 간단한 게임입니다!',
                },
                {
                    color: '#1F7087',
                    src: 'http://cfile2.uf.tistory.com/image/114028404FB7ADAB01EA5D',
                    title: '베팅금',
                    artist: '기본적으로 2만원의 돈이 주어지며, 쿠키에 저장되게 제작했습니다! 돈이 부족하면 베팅할 수 없다구요~',
                },
                {
                    color: '#952175',
                    src: 'https://miro.medium.com/max/2560/1*CubX6bWeA5pwe_IfEY4kmg.png',
                    title: '상대방은 봇입니다!',
                    artist: '그렇다고 높은 수준의 A.I를 기대하진 말아주세요. 확률에 의해 베팅할 뿐이라구요! 기본 판돈 100원부터 시작해봅시다!',
                },
            ],
        }),
    }
</script>

<style scoped>
</style>