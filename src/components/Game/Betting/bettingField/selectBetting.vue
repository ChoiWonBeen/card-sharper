<template>
    <v-card class="betting" style="width: 200px">
        <v-list rounded>
            <v-subheader>전체 판돈 : {{ raisedSum }}</v-subheader>
            <v-list-item-group color="primary">

                <call></call>
                <half></half>
                <bbing></bbing>
                <ddadang></ddadang>
                <die></die>

            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
    import bettingMethods from "./mixin/bettingMethods";
    import call from "./bettings/call";
    import half from "./bettings/half";
    import bbing from "./bettings/bbing";
    import ddadang from "./bettings/ddadang";
    import die from "./bettings/die";

    export default {
        name: "selectBetting",
        mixins: [bettingMethods],
        components: {
            'call':call,
            'half':half,
            'bbing':bbing,
            'ddadang':ddadang,
            'die':die
        }
    }
</script>

<style scoped>
    .betting {
        width: 200px;
    }
</style>