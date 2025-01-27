<template>
    <!-- <transition name="anim-modal-content"> -->
    <div @click="visible = false" class="reward-collected-dialog">
        <div :class="{ hidden: !visible }" class="reward-collected-dialog-backdrop"></div>
        <canvas ref="canvas" :class="{ hidden: !visible }" class="reward-collected-dialog-canvas" />
        <div :class="{ hidden: !visible }" class="reward-collected-dialog-wrapper">
            <div class="reward-collected-dialog-body">
                <div class="reward-collected-dialog-card-reward-type urbanist-black">
                    {{ type.toUpperCase() }}
                </div>
                <div class="reward-collected-dialog-card">
                    <CoinStack class="reward-collected-dialog-card-icon" />
                    <div class="reward-collected-dialog-card-info urbanist-bold">x{{ amount }}</div>
                </div>
            </div>
            <div class="reward-collected-dialog-message urbanist-extra-bold">Congratulations</div>
        </div>
    </div>
    <!-- </transition> -->
</template>

<script>
import CoinStack from "~/static/icons/coin-stack.svg?inline";
import confetti from "canvas-confetti";

export default {
    components: { CoinStack },
    data() {
        return {
            visible: false,
            type: "coins",
            amount: 0,
            confetti: null
        }
    },
    watch: {
        visible(value) {
            if (value) {
                this.startConfetti()
            } else {
                this.confetti.reset()
            }
        }
    },
    mounted() {
        document.addEventListener("reward-collected", this.onEvent);
        this.confetti = this.confetti || confetti.create(this.$refs.canvas, { resize: true, useWorker: true });
    },
    unmounted() {
        document.removeEventListener("reward-collected", this.onEvent)
    },
    methods: {
        onEvent(event) {
            if (event.detail) {
                this.visible = true;
                this.type = event.detail.type;
                this.amount = event.detail.amount;
            }
        },
        startConfetti() {
            this.confetti({
                particleCount: 20,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }
}
</script>