<template>
    <v-footer
            app
            color="blue-grey"
            class="white--text"
    >
        <span>타짜 by WonBeenC</span>
        <span style="float: right">
            <img src="https://image.flaticon.com/icons/png/512/87/87390.png" class="footer__img" alt="facebook">
            <img src="https://image.flaticon.com/icons/png/512/33/33702.png" class="footer__img" alt="instargram">
        </span>
    </v-footer>
</template>

<script>
    export default {
        name: "footer",

    }
</script>

<style scoped>
    .footer__img{
        height: 18px;
        padding-right: 7px;
    }
</style>