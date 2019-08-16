<template>
    <div>
        <div class="opponent__field" v-if="(start==='yes')">
            <img src="@/assets/CardImage/0.png" alt="뒷면" class="card">
            <img src="@/assets/CardImage/0.png" alt="뒷면" class="card">
        </div>
        <div class="text-center d-flex align-center opponent__field" v-if="(start==='open')">
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-img  v-on="on"
                            max-width="46"
                            max-height="72"
                            :src="getCard(opponentHand1)" alt="" class="card"></v-img>
                    <v-img v-on="on"
                           max-width="46"
                           max-height="72"
                           :src="getCard(opponentHand2)" alt="" class="card"></v-img>
                </template>
                <span>{{ battleResult[2] }}</span>
            </v-tooltip>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "OpponentField",
        computed: {
            ...mapGetters(['start', 'opponentHand1', 'opponentHand2','battleResult'])
        },
        methods: {
            getCard(cardNum) {
                return require('./static/' + cardNum + '.gif')
            }
        }
    }
</script>

<style scoped>
    .opponent__field {
        justify-content: center;
        display: flex;
        text-align: center;
    }
</style>