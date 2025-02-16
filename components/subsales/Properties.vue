<template>
    <v-container>
        <PropertyFilters :filter="filters" node="subsales-properties" class="mb-1" />
        <PropertyCategories v-model="filters.category" class="mb-4" />

        <PropertyCard v-if="properties[0]" :property="properties[0]" horizontal class="mb-6" />

        <div class="properties-list">
            <PropertyCard v-for="(item, index) in properties.slice(1)" :key="index" :property="item" />
        </div>
    </v-container>
</template>

<script>
import propertyServices from "~/services/property"

export default {
    data() {
        return {
            filters: {},
            properties: propertyServices.getProperties()
        }
    }
}
</script>