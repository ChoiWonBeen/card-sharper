<template>
    <v-card style="width: 200px">
        <v-subheader>상대방이 베팅중입니다!</v-subheader>
        <div align="center">
            <v-progress-circular
                    indeterminate
                    color="amber"
                    style="margin-bottom: 30px; margin-top: 10px;"
            ></v-progress-circular>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "loading",
    }
</script>

<style scoped>

</style>