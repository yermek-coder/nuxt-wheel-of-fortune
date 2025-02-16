<template>
    <div>
        <div class="home-header">
            <v-container class="py-5">
                <div>
                    <Location />
                    <div class="d-flex gap-3">
                        <PropertySearch @focus="openFilters" :filters="filters" class="flex-grow-1" />
                        <HomeMaps />
                    </div>
                </div>
            </v-container>
        </div>
        <HomeLinks />
        <HomeFeatures class="mb-8" />
        <PropertyPromos />
        <HomeServices />
        <HomeVideos class="mb-5" />
        <HomeProperties />
    </div>
</template>

<script>
import propertyService from '~/services/property';

export default {
    title: "Home",
    icon: "e",
    layout: "default",
    order: 0,
    data() {
        return {
            filters: {}
        }
    },
    methods: {
        openFilters() {
            propertyService.openSearchDialog(this.filters)
        }
    }
}
</script>