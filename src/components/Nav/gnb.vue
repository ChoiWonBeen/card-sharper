<template>
    <div class="gnb">
        this is global navigation bar
        <br>
        <router-link to="/">MainPage</router-link> |
        <router-link to="/game">GamePage</router-link>
    </div>
</template>

<script>
    export default {
        name: "gnb"
    }
</script>

<style scoped>

</style>