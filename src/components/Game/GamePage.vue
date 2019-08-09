<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawerRight"
                app
                clipped
                right
        >
            <v-list dense>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-content>
                        <v-list-item-title>잔액</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list dense>
                <v-list-item @click.stop="left = !left">
                    <v-list-item-content>
                        <v-list-item-title>족보</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer
                v-model="left"
                fixed
                temporary
        ></v-navigation-drawer>

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

        <v-navigation-drawer
                v-model="right"
                fixed
                right
                temporary
        ></v-navigation-drawer>

        <fnb></fnb>
    </v-app>
</template>

<script>
    import fnb from "../Nav/fnb";
    export default {
        props: {
            source: String,
        },
        components: {
            'fnb' : fnb
        },
        data: () => ({
            drawer: null,
            drawerRight: null,
            right: false,
            left: false,
        }),
    }
</script>

<style scoped>
    .card{
        width:46px;
        height: 72px;
    }
</style>