<template>
    <v-content>
        <v-container
                fluid
                fill-height
        >
            <v-layout
                    justify-center
                    align-center
            >
                <v-flex shrink>
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    :href="source"
                                    icon
                                    large
                                    target="_blank"
                                    v-on="on"
                            >
                                <v-icon large>mdi-code-tags</v-icon>
                            </v-btn>
                        </template>
                        <span>Source</span>
                    </v-tooltip>
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    icon
                                    large
                                    href="https://codepen.io/johnjleider/pen/QewYYx"
                                    target="_blank"
                                    v-on="on"
                            >
                                <v-icon large>mdi-codepen</v-icon>
                            </v-btn>
                        </template>
                        <span>Codepen</span>
                    </v-tooltip>
                    <div>
                        <img src="@/assets/CardImage/1.gif" alt="">
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "Betting"
    }
</script>

<style scoped>

</style>