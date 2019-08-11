<template>
    <div class="user__field" v-if="(start==='yes')">
        <img src="@/assets/CardImage/3.gif" alt="" class="card">
        <img src="@/assets/CardImage/8.gif" alt="" class="card">
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "UserField",
        computed: {
            ...mapGetters(['start'])
        }
    }
</script>

<style scoped>
    .user__field {
        text-align: center;
    }
</style>