<template>
    <StepIconActive v-if="value" />
    <StepIconPassive v-else />
</template>

<script>
import StepIconPassive from "~/static/icons/gem-step-passive.svg?inline"
import StepIconActive from "~/static/icons/gem-step-active.svg?inline"

export default {
    components: { StepIconPassive, StepIconActive },
    props: ["value"]
}
</script>