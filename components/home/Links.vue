<template>
    <v-container class="home-links pt-6">
        <NuxtLink v-for="link in links" :key="link.path" :to="link.path"
            class="home-links-link d-flex flex-column align-center px-1">
            <div class="home-links-link-card teal lighten-5 d-flex align-center justify-center rounded-xl">
                <Icon :icon="link.icon" />
            </div>
            <div class="home-links-link-text text-body-4 font-weight-bold text-uppercase text-center text--primary">
                {{ link.name }}
            </div>
        </NuxtLink>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            links: []
        }
    },
    created() {
        this.init()
    },
    methods: {
        async init() {
            this.links = this.$routes
                .filter(route => route.parent === "/home")
                .sort((a, b) => (a.component.order > b.component.order ? 1 : -1))
                .map(({ path, component, name }) => ({ name: component?.name || name.split("-").pop(), path, icon: component.icon, }))
        }
    }
}
</script>