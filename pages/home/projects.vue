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

        <PropertyPromos />

        <HomeFeatures class="mb-5" open />

        <PropertyLaunches />

        <SubsalesProperties />
    </div>
</template>

<script>
export default {
    title: "New Projects",
    icon: "projects",
    order: 300
}
</script>
