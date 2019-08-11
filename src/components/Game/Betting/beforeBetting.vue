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
            ...mapMutations(['clickStart']),
            startButton : function () {
                this.clickStart('yes')
            }
        }
    }
</script>

<style scoped>

</style>