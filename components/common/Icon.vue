<template>
    <component :is="iconComponent" v-if="iconComponent" />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            iconComponent: null,
        };
    },
    watch: {
        icon: {
            immediate: true,
            async handler(newIconName) {
                try {
                    const iconModule = await import(`~/static/icons/${newIconName}.svg?inline`);
                    this.iconComponent = defineAsyncComponent(() => Promise.resolve(iconModule.default));
                } catch (error) {
                    console.error(`Failed to load icon: ${newIconName}`, error);
                    this.iconComponent = null;
                }
            },
        },
    },
};
</script>