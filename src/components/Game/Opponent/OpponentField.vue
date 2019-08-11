<template>
   <div class="opponent__field" v-if="(start==='yes')">
       <img src="@/assets/CardImage/0.png" alt="뒷면" class="card">
       <img src="@/assets/CardImage/0.png" alt="뒷면" class="card">
   </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "OpponentField",
        computed: {
            ...mapGetters(['start'])
        }
    }
</script>

<style scoped>
    .opponent__field {
        text-align: center;
    }
</style>