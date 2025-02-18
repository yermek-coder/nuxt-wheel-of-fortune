<template>
    <div class="onbording">
        <v-container class="pb-0 mb-3 white">
            <Breadcrumbs />
        </v-container>

        <v-container>
            <div class="text-center mb-14">
                <div class="text-h6">What would you like to do ?</div>
                <div class="text-body-1">Based on your needs, we recommend more suitable content and personalized
                    services.
                </div>
                <v-divider class="mt-4"></v-divider>
            </div>

            <div class="d-flex flex-column gap-4">
                <v-btn @click="activeLink = item.path" v-for="item in links" :key="item.path" :class="linkClass(item)"
                    class="elevation-0" x-large>
                    <div class="d-flex align-center gap-3 onbording-list-item">
                        <Icon :icon="item.icon" />
                        <span class="text-capitalize text-left">{{ item.title }}</span>
                    </div>
                </v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    route: {
        title: "Onbording"
    },
    data() {
        return {
            activeLink: null
        }
    },
    computed: {
        links() {
            return this.$routes
                .filter(route => route.parent === "/onbording" && route.component?.route)
                .sort((a, b) => (a.component.route.order > b.component.route.order ? 1 : -1))
                .map(({ path, component }) => ({ title: component.route.title, path, icon: component.route.icon, }))
        }
    },
    methods: {
        linkClass(route) {
            return route.path === this.activeLink ? "teal--text teal lighten-5" : "white"
        }
    }
}
</script>