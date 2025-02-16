<template>
    <div class="subsales">
        <v-container class="py-5">
            <div>
                <HomeBreadcrumbs />
                <div class="d-flex gap-3">
                    <PropertySearch class="flex-grow-1" />
                    <HomeMaps />
                </div>
            </div>
        </v-container>

        <HomeFeatures class="mb-5" open />

        <SubsalesProperties />

        <v-btn elevation="2" fab class="subsales-fab" right fixed>
            <Icon icon="map2" />
        </v-btn>
    </div>
</template>

<script>
export default {
    title: "Subsales",
    icon: "house",
    order: 0,
}
</script>
