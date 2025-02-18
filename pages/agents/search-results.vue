<template>
    <div>
        <v-container class="pb-0 mb-3 white">
            <Breadcrumbs />
        </v-container>

        <v-container class="py-3">
            <SearchField />
        </v-container>

        <v-container>
            <v-chip-group v-model="activeFeature">
                <v-chip @click="selectFeature(feature)" v-for="(feature, index) in features" :key="index"
                    :value="feature.component" active-class="teal--text text-lighten-2" outlined>
                    {{ feature.title }}
                    <v-icon class="ms-1">mdi-chevron-{{ feature.component === activeFeature ? 'up' : 'down' }}</v-icon>
                </v-chip>
            </v-chip-group>

            <component v-if="activeFeature" :is="activeFeature" :filters="filters" class="mt-3"></component>
        </v-container>

        <v-container>
            <div class="d-flex flex-column gap-4">
                <template v-for="(item, idx) in agents">
                    <AgentsItem :key="idx" :agent="item" />
                    <v-divider v-show="idx < (agents.length - 1)"></v-divider>
                </template>
            </div>
        </v-container>
    </div>
</template>

<script>
import agentService from '~/services/agent';
import featureService from '~/services/feature';

export default {
    route: { title: "Search results" },
    data() {
        return {
            activeFeature: null,
            category: null,
            categories: ['Top Lister', 'Featured'],
            agents: agentService.getAgents(),
            filters: {}
        }
    },
    computed: {
        features() {
            return featureService.getFeatures("filter", { node: "agents-search-results", filters: this.filters })
        }
    },
    methods: {
        selectFeature(feature) {
            if (feature.component === this.activeFeature) {
                this.activeFeature = null
            } else {
                this.activeFeature = feature.component;
            }
        }
    }
}
</script>