<template>
    <v-container class="properties-promos overflow-x-auto">
        <PropertyPromosItem v-for="(item, index) in promos" :key="(index)" :promo="item" />
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            promos: [
                {
                    title: "Interior Design",
                    descr: "Insert your property name to get design solution",
                    bgImg: "/card-bg.jpg"
                },
                {
                    title: "Interior Design",
                    descr: "Insert your property name to get design solution",
                    bgImg: "/card-bg.jpg"
                }
            ]
        }
    }
}
</script>