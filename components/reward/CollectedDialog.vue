<template>
    <div @click="hide" class="reward-collected-dialog">
        <div :class="[{ hidden: !visible }, animationClasses]" class="reward-collected-dialog-backdrop"></div>
        <div :class="[{ hidden: !visible }, animationClasses]" class="reward-collected-dialog-wrapper">
            <div class="reward-collected-dialog-body">
                <div class="reward-collected-dialog-card-reward-type urbanist-black">
                    {{ type.toUpperCase() }}
                </div>
                <div class="reward-collected-dialog-card">
                    <Icon icon="coin-stack" class="reward-collected-dialog-card-icon" />
                    <div class="reward-collected-dialog-card-info urbanist-bold">x{{ amount }}</div>
                </div>
            </div>
            <div class="reward-collected-dialog-message urbanist-extra-bold">Congratulations</div>
        </div>
    </div>
</template>

<script>
import confetti from "canvas-confetti";

const ANIM_DURATION = 500;

export default {
    data() {
        return {
            visible: false,
            type: "coins",
            amount: 0,
            confetti: null,
            aboutToShow: false,
            aboutToHide: false,
        }
    },
    computed: {
        animationClasses() {
            return {
                'about-to-show': this.aboutToShow,
                'about-to-hide': this.aboutToHide
            }
        }
    },
    mounted() {
        document.addEventListener("reward-collected", this.onEvent);
    },
    unmounted() {
        document.removeEventListener("reward-collected", this.onEvent)
    },
    methods: {
        onEvent(event) {
            if (event.detail) {
                this.show()
                this.type = event.detail.type;
                this.amount = event.detail.amount;
            }
        },
        async startConfetti() {
            await this.$nextTick()
            confetti({
                particleCount: 50,
                spread: 90,
                origin: { y: 0.5, x: 0.5 },
                startVelocity: 35,
                colors: ["#A267FF", "#1BBE6C", "#05BBDD", "#367BF2", "#FBD44D"]
            });
        },
        show() {
            this.visible = true;
            this.aboutToShow = true;
            setTimeout(() => {
                this.aboutToShow = false;
                this.startConfetti();
            }, ANIM_DURATION);
        },
        hide() {
            this.aboutToHide = true;
            setTimeout(() => {
                this.aboutToHide = false;
                this.visible = false;
                confetti.reset();
            }, ANIM_DURATION / 2);

        }
    }
}
</script>