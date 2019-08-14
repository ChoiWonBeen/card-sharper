<template>
    <div class="user__field" v-if="(start==='yes')">
        <v-img
                max-width="46"
                max-height="72"
                :src="getCard(userHand1)" alt="" class="card"></v-img>
        <v-img
                max-width="46"
                max-height="72"
                :src="getCard(userHand2)" alt="" class="card"></v-img>
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
            ...mapGetters(['start','userHand1','userHand2'])
        },
        methods: {
            clickIt: function (input) {
                alert(input)
            },
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