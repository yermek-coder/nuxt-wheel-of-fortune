<template>
    <div class="property-search px-4 d-flex align-center gap-3">
        <span class="font-weight-bold">PG</span>
        <v-icon>mdi-chevron-down</v-icon>
        <input v-model="filters.q" @focus="$emit('focus')" type="text" placeholder="Search here">
    </div>
</template>

<script>
export default {
    props: { filters: { type: Object, default: () => ({}) } },
}
</script>