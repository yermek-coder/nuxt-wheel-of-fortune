<template>
    <v-container class="reward-screen">
        <v-row justify="center">
            <v-col cols="8">
                <div class="reward-screen-content">
                    <RewardTitle>Daily Bonus</RewardTitle>
                    <div class="reward-screen-content-text-gold urbanist-semi-bold">Come back tomorrow for more! </div>
                    <RewardSteps :value="1" />
                    <div class="reward-progress-card">
                        <RewardProgress :value="12" :range="[0, 30]" :steps="progressSteps" />
                    </div>
                    <v-container class="reward-progress-grid">
                        <v-row>
                            <v-col @click="collectReward(item)" v-for="(item, idx) in rewards" :key="idx" cols="4">
                                <RewardDayCard :title="`Day ${idx + 1}`" :info="item.amount && `x${item.amount}`"
                                    :active="item.active" :checked="item.collected">
                                    <RewardDayCardIcon :type="item.type" />
                                </RewardDayCard>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row justify="center">
                            <v-col cols="3" class="reward-screen-content-line" />
                            <v-col cols="3" class="reward-screen-content-last-day urbanist-extra-bold">Day 7</v-col>
                            <v-col cols="3" class="reward-screen-content-line" />
                        </v-row>
                    </v-container>
                    <v-container class="reward-progress-grid">
                        <v-row justify="center">
                            <v-col v-for="(item, idx) in lastDayRewards" :key="idx" cols="4">
                                <RewardDayCard :info="item.amount && `x${item.amount}`">
                                    <RewardDayCardIcon :type="item.type" />
                                </RewardDayCard>
                            </v-col>
                        </v-row>
                    </v-container>
                    <div class="reward-screen-content-timer"><span class="urbanist-medium">Next reward in </span><span
                            class="urbanist-extra-bold">{{ timerDate }}</span></div>
                    <div class="reward-screen-content-call urbanist-extra-bold">Tap to Collect</div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            progressSteps: [
                {
                    value: 0,
                    title: "1",
                },
                {
                    value: 8,
                    title: "8",
                    icon: "chest-wood"
                },
                {
                    value: 15,
                    title: "15",
                    icon: "chest-blue"
                },
                {
                    value: 22,
                    title: "22",
                    icon: "chest-purple"
                },
                {
                    value: 30,
                    title: "30",
                    icon: "chest-gold"
                }
            ],
            rewards: [
                { type: "coins", amount: 25, collected: true },
                { type: "coins", amount: 50, collected: true },
                { type: "coins", amount: 100, collected: true },
                { type: "coins", amount: 200, active: true },
                { type: "coins", amount: 300 },
                { type: "coins", amount: 500 },
            ],
            lastDayRewards: [{ type: "coins" }, { type: "gems" },],
            nextRewardDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 12),
            interval: null,
            timerDate: "11:11:11",
        }
    },
    mounted() {
        this.interval = setInterval(this.timer, 1000)
    },
    unmounted() {
        clearInterval(this.interval);
        this.interval = null;
    },
    methods: {
        timer() {
            const now = new Date();
            const diffMs = this.nextRewardDate - now;
            const hours = Math.floor(diffMs / (1000 * 60 * 60));
            const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
            this.timerDate = [hours, minutes, seconds].map(num => num.toString().padStart(2, "0")).join(":")
        },
        collectReward(event) {
            document.dispatchEvent(new CustomEvent("reward-collected", { detail: event }))
        }
    }
}
</script>