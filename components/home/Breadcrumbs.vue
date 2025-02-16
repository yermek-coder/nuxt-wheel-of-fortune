<template>
    <div class="d-flex align-center gap-1 py-4">
        <v-btn text class="px-0" small>
            <NuxtLink :to="page.parent"><v-icon color="black">mdi-chevron-left</v-icon></NuxtLink>
        </v-btn>
        <h4 class="text-uppercase">{{ page.component.title }}</h4>
    </div>
</template>

<script>
export default {
    computed: {
        page() {
            return this.$routes.find(page => page.path === this.$route.path)
        }
    }
}
</script>