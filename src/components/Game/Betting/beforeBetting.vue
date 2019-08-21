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
                <v-row justify="center">
                    <v-btn
                            @click="startButton()"
                            class="ma-2" tile color="primary" dark>Game Start!</v-btn>
                </v-row>
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
        }
    }
</script>

<style scoped>
</style>