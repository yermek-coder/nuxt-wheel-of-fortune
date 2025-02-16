<template>
    <v-bottom-navigation fixed class="bottom-navigation" height="78">
        <NuxtLink v-for="link in links" :key="link.path" :to="link.path"
            class="d-flex flex-column align-center text-uppercase text-body-4" active-class="teal--text">
            <Icon :icon="link.icon" />
            <span>{{ link.name }}</span>
        </NuxtLink>
    </v-bottom-navigation>
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
                .filter(route => route.component.layout === "default")
                .sort((a, b) => (a.component.order > b.component.order ? 1 : -1))
                .map(({ path, component }) => ({ name: component.title, path, icon: component.icon, }))
        }
    }
}
</script>