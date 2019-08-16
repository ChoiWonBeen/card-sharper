<template>
    <v-content>
        <div class="mainText headline">
            싸늘하다.... <br><br> 가슴에 비수가 날아와 꽂힌다... <br> <br> 하지만 걱정 마라. <br> 손은 눈보다 빠르니까.
        </div>
        <v-container
                fluid
                fill-height
        >

            <v-layout
                    justify-center
                    align-center
                    class="board__money"
            >
                <v-btn
                        @click="startButton()"
                        class="ma-2" tile color="primary" dark>Game Start!</v-btn>
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
                this.clickStart('yes')
                this.shuffle()
            }
        }
    }
</script>

<style scoped>
    .mainText{
        text-align: center;
        height: 0px;
        float: left;
        margin-left: 32%;
        margin-top: 20%;
        width: 300px;
    }
</style>