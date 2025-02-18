<template>
    <v-row dense class="text-uppercase">
        <v-col v-for="(item, index) in sort" :key="index" cols="12">
            <v-chip class="justify-center">{{ item }}</v-chip>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: ["filters"],
    feature: {
        type: "filter",
        nodes: ["property-filters-dialog", "agents-search-results"],
        title: "Sort",
        order: 500,
    },
    data() {
        return {
            sort: [
                "default",
                "Experience from high to low",
                "Experience from low to high",
            ]
        }
    }
}
</script>