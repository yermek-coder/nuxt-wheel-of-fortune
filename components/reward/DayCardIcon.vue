<template>
    <CoinStack v-if="type === 'coins'" />
    <IconGem v-else color="#7600CD" />
</template>

<script>
import CoinStack from "~/static/icons/coin-stack.svg?inline"

export default {
    components: { CoinStack },
    props: ["type"]
}
</script>