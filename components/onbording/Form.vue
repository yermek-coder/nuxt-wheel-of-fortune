<template>
    <v-form @submit.prevent="submit" class="d-flex flex-column">
        <v-select :items="items" outlined label="City" class="rounded-xl" />
        <v-text-field outlined label="Residential Name" class="rounded-xl" />
        <span class="text--secondary text-body-3 mb-1">Phone Number</span>
        <v-text-field outlined placeholder="Phone Number" class="rounded-xl">
            <template #prepend-inner>
                <div class="d-flex gap-2 align-center">
                    <Icon icon="flag" />
                    <span class="text--secondary">+62</span>
                    <v-icon>mdi-chevron-down</v-icon>
                </div>
            </template>
        </v-text-field>

        <v-text-field outlined label="Residential Name" class="rounded-xl">
            <template #append>
                <span class="teal--text">Request</span>
            </template>
        </v-text-field>

        <v-btn type="submit" x-large color="teal" class="white--text flex-grow-1">Confirm</v-btn>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
    },
    methods: {
        submit() {
            this.$modal({
                component: "SuccessDialog",
                props: {
                    title: "Submission Successfully!",
                    description: "Your submission has been successfully submitted. Our agent will contacting you soon."
                },
                fullscreen: true
            })
        }
    }
}
</script>