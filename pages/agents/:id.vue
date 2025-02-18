<template>
    <div class="agents-agent">
        <v-container class="pb-0 mb-3 white">
            <div class="d-flex align-center justify-space-between gap-3 py-4">
                <v-btn @click="$router.go(-1)" icon small>
                    <v-icon color="black">mdi-chevron-left</v-icon>
                </v-btn>
                <div class="text-h7 font-weight-medium">Agent</div>
                <div class="d-flex align-center gap-2 black--text">
                    <v-btn icon>
                        <v-icon>mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-btn @click="share" icon>
                        <v-icon>mdi-export-variant</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-container>

        <v-container class="mb-4">
            <v-img src="/agent-cover.jpg" class="agents-agent-cover">
                <v-avatar size="88"><img :src="agent.avatar" :alt="agent.name"></v-avatar>
            </v-img>
        </v-container>

        <v-container class="mb-4">
            <div class="d-flex flex-column align-center">
                <div class="text-h6 mb-2">{{ agent.name }}</div>
                <div class="d-flex gap-1">
                    <v-chip v-for="tag in agent.tags" :key="tag" small outlined>{{ tag }}</v-chip>
                </div>
            </div>
        </v-container>

        <v-container>
            <div class="d-flex gap-4 align-center justify-space-between">
                <div class="d-flex gap-1 flex-column align-center">
                    <span class="text-h6">{{ agent.experienceYears }}</span>
                    <span>Experiences</span>
                </div>
                <v-divider vertical></v-divider>
                <div class="d-flex gap-1 flex-column align-center">
                    <span class="text-h6">{{ agent.forSale }}</span>
                    <span>For Sale</span>
                </div>
                <v-divider vertical></v-divider>
                <div class="d-flex gap-1 flex-column align-center">
                    <span class="text-h6">{{ agent.forRent }}</span>
                    <span>For Rent</span>
                </div>
            </div>
        </v-container>

        <v-container>
            <v-chip-group v-model="tab" mandatory>
                <v-chip v-for="item in tabs" :key="item" :value="item" active-class="teal--text"
                    class="flex-grow-1 justify-center">{{ item }}</v-chip>
            </v-chip-group>
        </v-container>

        <v-container>
            <v-card class="white pa-4 rounded-xl elevation-0">
                <div class="text-h7 font-weight-medium mb-2">About {{ agent.name }}</div>
                <p class="text-body-2 mb-0">{{ agent.about }}</p>
            </v-card>
        </v-container>

        <v-container>
            <v-card class="white pa-4 rounded-xl elevation-0">
                <div class="text-h7 font-weight-medium mb-2">Specialities & Services</div>
                <div class="d-flex flex-wrap gap-2">
                    <v-chip v-for="tag in agent.services" :key="tag" outlined>{{ tag }}</v-chip>
                </div>
            </v-card>
        </v-container>

        <v-container>
            <v-card class="white pa-4 rounded-xl elevation-0 mb-16">
                <div class="text-h7 font-weight-medium mb-2">Active Listing</div>
                <v-chip-group v-model="listingCategoriesActive" mandatory>
                    <v-chip v-for="item in listingCategories" :key="item" :value="item" active-class="teal--text"
                        class="flex-grow-1 justify-center">{{ item }}</v-chip>
                </v-chip-group>
                <div class="properties-list properties-list-single-col pb-12">
                    <PropertyCard v-for="(item, index) in properties" :key="index" :property="item" horizontal />
                </div>
            </v-card>
        </v-container>

        <v-sheet class="agents-agent-bottom-sheet elevation-10">
            <v-container class="pt-4">
                <div class="d-flex flex-column mb-1">
                    <div class="agents-item d-flex gap-4 justify-space-between">
                        <v-avatar><img :src="agent.avatar" alt="Avatar"></v-avatar>
                        <div class="d-flex flex-column">
                            <div class="d-flex align-center gap-2">
                                <span>{{ agent.name + " " + agent.surname }}</span>
                                <v-icon class="teal--text" small>mdi-check-circle</v-icon>
                            </div>
                            <div class="caption">{{ agent.address }}</div>
                            <div class="caption">{{ agent.license }}</div>
                        </div>
                        <v-btn fab class="elevation-0" small>
                            <Icon icon="chat" />
                        </v-btn>
                        <v-btn fab class="elevation-0 green white--text" small>
                            <v-icon>mdi-whatsapp</v-icon>
                        </v-btn>
                    </div>
                </div>

                <p class="text-body-4 supressed mb-0">I confirm that I have read the <span class="teal--color">privacy
                        policy</span>
                    and allow my
                    information to be shared with this agent who may contact me later.</p>
            </v-container>
        </v-sheet>
    </div>
</template>

<script>
import agentService from '~/services/agent';
import propertyServices from "~/services/property"

export default {
    data() {
        return {
            agent: agentService.getAgent(this.$route.params.id),
            tab: null,
            tabs: [
                "About",
                "Services",
                "Listings",
            ],
            listingCategoriesActive: [],
            listingCategories: [
                "All",
                "Commercial",
                "High Rise",
                "Landed",
            ],
            properties: propertyServices.getProperties(),
        }
    },
    mounted() {
        this.mess = navigator.share
    },
    methods: {
        share() {
            if (navigator?.share) {
                navigator.share({
                    title: this.agent.name + " " + this.agent.surname,
                    text: this.agent.about,
                    url: window.location.href,
                })
            } else {
                this.$modal({ component: "ShareDialog", props: { link: window.location.href }, width: 343 })
            }
        }
    }
}
</script>