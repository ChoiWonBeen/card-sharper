<template>
    <div>
        <gnb></gnb>
        this is main page
    </div>
</template>

<script>
    import gnb from "./Nav/gnb";

    export default {
        name: "mainpage",
        components : {
            'gnb' : gnb
        }
    }
</script>

<style scoped>

</style>