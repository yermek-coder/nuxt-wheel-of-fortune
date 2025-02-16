<template>
    <v-container v-touch="{ left: () => folded = true, right: () => folded = false }" class="home-features">
        <div class="home-features-grid">
            <component v-for="feature in features.slice(0, 5)" :key="feature.component" :is="feature.component" />
        </div>

        <Collapsable :show="!folded">
            <div class="home-features-grid">
                <component v-for="feature in features.slice(5)" :key="feature.component" :is="feature.component" />
            </div>
        </Collapsable>

        <div class="home-features-indicator d-flex gap-1">
            <div :style="{ width: `${folded ? 10 : 5}px` }" :class="`lighten-${folded ? 2 : 5}`"
                class="home-features-indicator-bar teal"></div>
            <div :style="{ width: `${folded ? 5 : 10}px` }" :class="`lighten-${folded ? 5 : 2}`"
                class="home-features-indicator-bar teal"></div>
        </div>
    </v-container>
</template>

<script>
import featureService from '~/services/feature';

export default {
    props: { open: Boolean },
    data() {
        return {
            features: [],
            folded: !this.open
        }
    },
    created() {
        this.features = featureService.getFeatures("action", { node: "home-top" });
    }
}
</script>