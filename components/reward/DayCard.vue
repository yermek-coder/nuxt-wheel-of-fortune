<template>
    <a class="reward-day-card" :class="{ active }">
        <span class="reward-day-card-title urbanist-extra-bold urbanist-shadow">{{ title }}</span>
        <span class="reward-day-card-body">
            <slot />
        </span>
        <span class="reward-day-card-info">
            <RewardBadge v-if="checked">
                <Check />
            </RewardBadge>
            <span v-else class="urbanist-bold reward-day-card-info-text urbanist-white-shadow">{{ info }}</span>
        </span>
    </a>
</template>

<script>
import Check from "~/static/icons/check.svg?inline"

export default {
    components: { Check },
    props: {
        title: String,
        active: Boolean,
        checked: Boolean,
        info: String
    }
}
</script>
