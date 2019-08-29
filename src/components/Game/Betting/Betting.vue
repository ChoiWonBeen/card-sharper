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
                    <select-betting v-if="(playing==='user')"></select-betting>
                    <loading v-if="(playing==='opponent')"></loading>
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
    import {mapGetters} from 'vuex'
    import loading from "./bettingField/loading";
    import selectBetting from "./bettingField/selectBetting";

    export default {
        name: "Betting",
        components: {
            'loading': loading,
            'select-betting': selectBetting
        },
        computed: {
            ...mapGetters(['userRaised','opponentRaised','playing'])
        }
    }
</script>

<style scoped>
    .board__money {
        width: 207px;
    }
</style>