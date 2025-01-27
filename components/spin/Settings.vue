<template>
    <v-container>
        <!-- Main Title -->
        <v-row>
            <v-col cols="12">
                <h1 class="text-h4 mb-4">Wheel of Fortune Customization</h1>
            </v-col>
        </v-row>

        <v-form @submit.prevent="submit">
            <!-- Total Coins and Multiplier -->
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field v-model.number="coinsCount" label="Total Coins" type="number" min="0"
                        required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model.number="multiplier" label="Multiplier" type="number" min="1"
                        required></v-text-field>
                </v-col>
            </v-row>

            <!-- Number of Sections Input -->
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model.number="spinsAvailable" label="Available spins" type="number" min="1"
                        required></v-text-field>
                </v-col>
            </v-row>

            <!-- Sections -->
            <v-row v-for="(section, index) in sections" :key="index">
                <v-col cols="12">
                    <h2 class="text-h6 mb-2">Section {{ index + 1 }}</h2>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field v-model.number="section.probability" label="Probability (%)" type="number" min="0"
                        max="100" required></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field v-model="section.color" label="Color (e.g., #FF0000)" required></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field v-model.number="section.amount" label="Amount" type="number" min="0"
                        required></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                    <v-select v-model="section.type" :items="['coins', 'gems']" label="Type" required></v-select>
                </v-col>
                <v-col cols="12" md="1">
                    <v-btn @click="removeSection(index)" :disabled="section.length < 4" color="error" icon>
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <!-- Add Section Button -->
            <v-row>
                <v-col cols="12">
                    <v-btn @click="addSection" color="secondary">
                        Add Section
                    </v-btn>
                </v-col>
            </v-row>

            <!-- Save Settings Button -->
            <v-row>
                <v-col cols="12">
                    <v-btn type="submit" color="primary">Copy Settings</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            coinsCount: 0,
            multiplier: 1,
            spinsAvailable: 2,
            numberOfSections: 3, // Default number of sections
            sections: [],
        };
    },
    created() {
        this.updateSections(); // Initialize sections based on default number
    },
    methods: {
        // Update sections based on the number of sections input
        updateSections() {
            const currentLength = this.sections.length;
            const newLength = this.numberOfSections;

            if (newLength > currentLength) {
                // Add new sections
                for (let i = currentLength; i < newLength; i++) {
                    this.sections.push({
                        probability: 0,
                        color: '#FFFFFF',
                        amount: 0,
                        type: 'coins',
                    });
                }
            } else if (newLength < currentLength) {
                // Remove extra sections
                this.sections.splice(newLength);
            }
        },
        // Add a new section
        addSection() {
            this.sections.push({
                probability: 0,
                color: '#FFFFFF',
                amount: 0,
                type: 'coins',
            });
            this.numberOfSections = this.sections.length; // Sync with input
        },
        // Remove a section by index
        removeSection(index) {
            this.sections.splice(index, 1);
            this.numberOfSections = this.sections.length; // Sync with input
        },
        // Save wheel settings
        submit() {
            // Validate probabilities sum to 100
            const totalProbability = this.sections.reduce((sum, section) => sum + section.probability, 0);
            if (totalProbability <= 0) {
                alert('Total probability must more that 0');
                return;
            }

            const settings = {
                coinsCount: this.coinsCount,
                multiplier: this.multiplier,
                sections: this.sections,
            }
            // Save settings logic here
            console.log('Wheel Settings:', settings);

            navigator.clipboard.writeText(JSON.stringify(settings, undefined, 2))
        },
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>