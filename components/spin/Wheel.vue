<template>
    <div class="wheel-root">
        <div class="wheel-container">
            <div ref="wheelWrapper" class="wheel-wrapper" :class="{ 'spinning': isSpinning }" :style="{
                transform: `rotate(${currentRotation}deg)`,
                transition: spinTransition
            }">
                <canvas ref="wheelCanvas" :width="size" :height="size"></canvas>
                <div class="gradient-overlay"></div>
                <div class="border"></div>
                <div class="section-labels">
                    <div v-for="(section, index) in sections" :key="index" class="section-label"
                        :style="calculateLabelPosition(index)">
                        <span class="section-text urbanist-bold urbanist-white-shadow">x{{ section.amount }}</span>
                        <img :src="section.icon" class="section-icon" />
                    </div>
                </div>
            </div>
            <div class="pointer">
                <Pointer />
            </div>
            <div class="knob">
                <Knob />
            </div>
        </div>
        <div class="multiplier urbanist-bold urbanist-white-shadow">x1</div>
        <div class="spins-left urbanist-extra-bold">1 Spin Left</div>

        <button @click="spinWheel" class="spin-button urbanist-black">
            Spin Now
        </button>
    </div>
</template>

<script>
import Knob from "~/static/decorations/knob.svg?inline"
import Pointer from "~/static/decorations/pointer.svg?inline"

export default {
    components: { Knob, Pointer },
    name: 'WheelOfFortune',
    props: {
        size: {
            type: Number,
            default: 270,
        },
        sections: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentRotation: 0,
            lastRotation: 0,
            ctx: null,
            isSpinning: false,
            spinTransition: '',
        };
    },
    mounted() {
        this.ctx = this.$refs.wheelCanvas.getContext('2d');
        this.drawWheel();
    },
    methods: {
        calculateLabelPosition(index) {
            const { size, sections } = this;
            const sliceAngle = 360 / sections.length;
            const centerAngle = index * sliceAngle + sliceAngle / 2;
            const radius = size * 0.30;

            const angleInRadians = (centerAngle - 90) * (Math.PI / 180);
            const x = size / 2 + radius * Math.cos(angleInRadians);
            const y = size / 2 + radius * Math.sin(angleInRadians);

            return {
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(${centerAngle}deg)`,
            };
        },
        drawWheel() {
            const { ctx, size, sections } = this;
            const center = size / 2;
            const radius = size / 2;
            const sliceAngle = (2 * Math.PI) / sections.length;
            let startAngle = -Math.PI / 2;

            ctx.clearRect(0, 0, size, size);

            sections.forEach((section, index) => {
                const endAngle = startAngle + sliceAngle;

                ctx.beginPath();
                ctx.moveTo(center, center);
                ctx.arc(center, center, radius, startAngle, endAngle);
                ctx.fillStyle = section.color;
                ctx.fill();

                startAngle = endAngle;
            });
        },
        spinWheel() {
            const { sections } = this;
            const totalProbability = sections.reduce((sum, section) => sum + section.probability, 0);
            const random = Math.random() * totalProbability;
            let cumulativeProbability = 0;
            let selectedIndex = 0;

            for (let i = 0; i < sections.length; i++) {
                cumulativeProbability += sections[i].probability;
                if (random <= cumulativeProbability) {
                    selectedIndex = i;
                    break;
                }
            }

            const sliceAngle = 360 / sections.length;
            const destinationAngle = -(selectedIndex * sliceAngle); // Negative for correct alignment
            const fullRotations = 360 * 5;

            // Calculate the shortest path to the winning position
            const currentAngle = this.lastRotation % 360;
            const angleDiff = ((destinationAngle - currentAngle + 540) % 360) - 180;
            const randomOffset = Math.random() * sliceAngle;
            const targetRotation = this.lastRotation + fullRotations + angleDiff - randomOffset;

            this.isSpinning = true;
            this.spinTransition = 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)';
            this.currentRotation = targetRotation;

            setTimeout(() => {
                this.isSpinning = false;
                this.spinTransition = '';
                this.lastRotation = targetRotation;
                document.dispatchEvent(new CustomEvent("reward-collected", { detail: sections[selectedIndex] }))
            }, 5000);
        },
    },
};
</script>
