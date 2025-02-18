<template>
    <div class="property-search px-4 d-flex align-center gap-3">
        <span class="font-weight-bold">PG</span>
        <v-icon>mdi-chevron-down</v-icon>
        <input @focus="openFilters" v-model="filters.q" type="text" :placeholder="placeholder">
    </div>
</template>

<script>
import propertyService from '~/services/property';

export default {
    props: {
        filters: { type: Object, default: () => ({}) },
        action: Boolean,
        placeholder: { type: String, default: "Search here" }
    },
    methods: {
        openFilters() {
            if (this.action) {
                propertyService.openSearchDialog(this.filters)
            }
        }
    }
}
</script>
