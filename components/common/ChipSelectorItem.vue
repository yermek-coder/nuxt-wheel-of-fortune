<template>
    <!-- <v-row v-bind="$attrs">
        <v-col v-for="(option, index) in options" :key="index" cols="4">
            <v-chip @click="setValue(option)" :class="{ 'teal--text': value[property] === option }"
                class="justify-center">
                {{ option }}
            </v-chip>
        </v-col>
    </v-row> -->

    <v-chip @click="setValue(value)" :class="{ 'teal--text': model[property] === value }">
        <slot />
    </v-chip>
</template>

<script>
export default {
    props: {
        model: Object,
        value: String,
        property: String,
    },
    methods: {
        setValue(value) {
            this.$set(this.model, this.property, value)
        },
    }
}
</script>