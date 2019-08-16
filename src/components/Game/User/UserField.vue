<template>
    <div class="text-center d-flex align-center user__field" v-if="(start==='yes' || start==='open')">
        <v-tooltip top>
            <template v-slot:activator="{ on }">
                    <v-img  v-on="on"
                            max-width="46"
                            max-height="72"
                            :src="getCard(userHand1)" alt="" class="card"></v-img>
                    <v-img v-on="on"
                            max-width="46"
                            max-height="72"
                            :src="getCard(userHand2)" alt="" class="card"></v-img>
            </template>
            <span>{{battleResult[1]}}</span>
        </v-tooltip>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "UserField",
        data : function () {
            return {
                linkHead: './static/',
                linkTail: '.gif'
            }
        },
        computed: {
            ...mapGetters(['start','userHand1','userHand2','battleResult','deck'])
        },
        methods: {
            getCard(cardNum) {
                return require('./static/' + cardNum + '.gif')
            },
        }
    }
</script>

<style scoped>
    .user__field {
        justify-content: center;
        display: flex;
    }
</style>