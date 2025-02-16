<template>
    <v-container>
        <div class="home-services rounded-lg-2 overflow-hidden">
            <div class="home-services-header py-3 px-2 d-flex gap-3">
                <Icon icon="shield-check" />
                <span class="text-uppercase font-weight-bold white--text text-body-3">TOP SERVICES SEARCH</span>
            </div>
            <div class="home-services-body pa-3">
                <div v-for="(item, idx) in services" :key="idx" class="d-flex flex-wrap justify-center">
                    <Icon :icon="item.icon" />
                    <div class="text-body-4">{{ item.title }}</div>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    title: "Moving",
                    icon: "wheel"
                },
                {
                    title: "Electrical",
                    icon: "electrical"
                },
                {
                    title: "Design",
                    icon: "design"
                },
                {
                    title: "Landscape",
                    icon: "leaf"
                },
                {
                    title: "Furniture",
                    icon: "furniture"
                },
                {
                    title: "Internet",
                    icon: "internet"
                },
                {
                    title: "Water",
                    icon: "water"
                },
                {
                    title: "Cleaner",
                    icon: "clean"
                },
                {
                    title: "Plumbers",
                    icon: "shower"
                },
                {
                    title: "Wireman",
                    icon: "wire"
                },
            ]
        }
    }
}
</script>