<template>
    <div class="search-results">
        <v-container class="py-5">
            <div>
                <Breadcrumbs />
                <div class="d-flex gap-3">
                    <SearchField class="flex-grow-1" />
                    <PropertyMaps />
                </div>
            </div>
        </v-container>

        <v-container>
            <PropertyFilters :filter="filters" node="subsales-properties" class="mb-1" />
            <PropertyCategories v-model="filters.category" class="mb-4" />

            <div class="properties-list properties-list-single-col gap-4">
                <v-card v-for="category in categories" :key="category" class="pa-3" outlined>
                    <div class="subtitle-1 font-weight-bold mb-2">{{ category }}</div>
                    <div class="properties-list properties-list-single-col">
                        <PropertyCard v-for="(item, index) in properties.slice(0, 4)" :key="index" :property="item"
                            horizontal />
                        <div class="d-flex justify-center">
                            <v-btn class="align-self-center" text>See More<v-icon
                                    right>mdi-chevron-right</v-icon></v-btn>
                        </div>
                    </div>
                </v-card>
            </div>
        </v-container>
    </div>
</template>

<script>
import propertyServices from "~/services/property"

export default {
    layout: "home",
    route: {
        title: "Search Results",
        hidden: true,
    },
    data() {
        return {
            filters: {},
            properties: propertyServices.getProperties(),
            categories: ['Subsales (120)', 'New Projects (10)', 'Rental (40)']
        }
    },
}
</script>
