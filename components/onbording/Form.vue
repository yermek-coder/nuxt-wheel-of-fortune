<template>
    <v-form @submit.prevent="submit" class="onbording-form d-flex flex-column gap-4">
        <v-select :items="items" outlined hide-details label="City" color="teal lighten-1" class="rounded-xl" />
        <v-text-field outlined hide-details label="Residential Name" color="teal lighten-1" class="rounded-xl" />
        <div class="d-flex flex-column gap-2">
            <span class="text--secondary text-body-3">Phone Number</span>
            <v-text-field outlined hide-details placeholder="Phone Number" type="number" color="teal lighten-1"
                class="rounded-xl onbording-form-phone">
                <template #prepend-inner>
                    <v-menu offset-y max-height="50vh">
                        <template v-slot:activator="{ on, attrs, value }">
                            <div v-bind="attrs" v-on="on" class="d-flex align-center gap-2">
                                <Icon icon="flag" />
                                <span class="text--secondary">+{{ countryCode }}</span>
                                <v-icon>mdi-chevron-down</v-icon>
                            </div>
                        </template>
                        <v-list ref="countriesList">
                            <v-list-item @click="countryCode = item.code" v-for="(item, index) in countryCodes"
                                :key="index">
                                <v-list-item-title>{{ item.country }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-text-field>
        </div>

        <v-text-field outlined hide-details label="Residential Name" color="teal lighten-1" class="rounded-xl">
            <template #append>
                <span class="teal--text">Request</span>
            </template>
        </v-text-field>

        <v-btn type="submit" x-large color="teal lighten-1" class="white--text flex-grow-1">Confirm</v-btn>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            countryCodes: [],
            countryCode: "62"
        }
    },
    mounted() {
        this.countryCodes = window.countryCodes
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