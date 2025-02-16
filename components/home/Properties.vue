<template>
    <v-container>
        <div class="text-h6 mb-3">Recommend Properties</div>

        <v-chip-group v-model="activePropertyCategory" mandatory class="mb-3">
            <v-chip v-for="(category, index) in categories" :key="index" active-class="teal--text text-lighten-2">
                {{ category.title }}
            </v-chip>
        </v-chip-group>

        <div class="properties-list">
            <PropertyCard v-for="(item, index) in properties" :key="index" :property="item" />
        </div>
    </v-container>
</template>

<script>
import propertyService from "~/services/property"

export default {
    data() {
        return {
            activePropertyCategory: "all",
            properties: propertyService.getProperties(),
            categories: [
                {
                    title: "All",
                    value: "all",
                },
                {
                    title: "Subsales",
                    value: "subsales",
                },
                {
                    title: "New Projects",
                    value: "new",
                },
                {
                    title: "Rent",
                    value: "rent",
                },
                {
                    title: "Luxury",
                    value: "luxury",
                },
                {
                    title: "Commercial",
                    value: "commercial",
                },
                {
                    title: "Condos",
                    value: "condos",
                },
            ]
        }
    }
}
</script>