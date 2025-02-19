<template>
    <div class="reward-collected-dialog d-flex flex-column align-center justify-center">
        <div>
            <div class="reward-collected-dialog-body mb-6">
                <div class="reward-collected-dialog-card-reward-type urbanist-black">
                    {{ reward.type.toUpperCase() }}
                </div>
                <div class="reward-collected-dialog-card">
                    <Icon icon="coin-stack" class="reward-collected-dialog-card-icon" />
                    <div class="reward-collected-dialog-card-info urbanist-bold">x{{ reward.amount }}</div>
                </div>
            </div>
            <div class="reward-collected-dialog-message urbanist-extra-bold text-center">Congratulations</div>
        </div>
    </div>
</template>

<script>
import confetti from "canvas-confetti";

export default {
    props: ["reward"],
    data() {
        return {
            visible: true,
        }
    },
    async mounted() {
        await this.$nextTick()
        window.requestAnimationFrame(() => {
            confetti({
                particleCount: 50,
                spread: 90,
                origin: { y: 0.5, x: 0.5 },
                startVelocity: 35,
                colors: ["#A267FF", "#1BBE6C", "#05BBDD", "#367BF2", "#FBD44D"],
                zIndex: 201
            });
        })
    }
}
</script>