<template>
    <v-footer
            app
            color="blue-grey"
            class="white--text"
    >
        <span>타짜 by. WonBeenC</span>
        <span style="float: right">
            <img src="https://image.flaticon.com/icons/png/512/87/87390.png" class="footer__img" alt="instagram" @click="clickImg('https://www.instagram.com/choi_1been/?hl=ko')">
            <img src="https://image.flaticon.com/icons/png/512/33/33702.png" class="footer__img" alt="facebook" @click="clickImg('https://www.facebook.com/profile.php?id=100007543098862')">
        </span>
    </v-footer>
</template>

<script>
    export default {
        name: "fnb",
        methods: {
            clickImg: function (link) {
                let win = window.open(link, '_blank')
                win.focus();
            }
        }
    }
</script>

<style scoped>
    .footer__img{
        height: 18px;
        padding-right: 20px;
    }
</style>