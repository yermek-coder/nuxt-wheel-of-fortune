<template>
    <v-container class="spin-screen">
        <v-row justify="center">
            <v-col cols="11">
                <div class="spin-screen-content">
                    <SpinHeader>24,384,585</SpinHeader>
                    <SpinWheel :sections="sections" />
                    <div class="spin-screen-content-button-bottom">
                        <ArrowDown />
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ArrowDown from "~/static/icons/arrow-down.svg?inline"

export default {
    components: { ArrowDown },
    data() {
        return {
            sections: [
                { color: '#FE0E73', amount: 200, type: "coins", probability: 50, icon: "/icons/coin.svg" },
                { color: '#7815FC', amount: 300, type: "coins", probability: 50, icon: "/icons/coin.svg" },
                { color: '#FE0E73', amount: 400, type: "coins", probability: 50, icon: "/icons/coin.svg" },
                { color: '#7815FC', amount: 500, type: "coins", probability: 0, icon: "/icons/coin.svg" },
                { color: '#FE0E73', amount: 600, type: "coins", probability: 0, icon: "/icons/coin.svg" },
                { color: '#7815FC', amount: 700, type: "coins", probability: 0, icon: "/icons/coin.svg" },
                { color: '#FE0E73', amount: 800, type: "coins", probability: 0, icon: "/icons/coin.svg" },
                { color: '#7815FC', amount: 1000, type: "coins", probability: 0, icon: "/icons/coin.svg" },
            ],
        };
    },
}
</script>