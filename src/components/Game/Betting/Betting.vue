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
                100000000
            </v-layout>
            <v-layout
                    justify-center
                    align-center
            >
                <v-flex shrink>
                    <v-card class="betting">
                        <v-list rounded>
                            <v-subheader>전체 판돈 : {{ this.$store.state.raised}}</v-subheader>
                            <v-list-item-group color="primary">
                                <v-list-item
                                        v-for="(item, i) in items"
                                        :key="i"
                                >
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.text"></v-list-item-title>
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
            >1000 </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "Betting",
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