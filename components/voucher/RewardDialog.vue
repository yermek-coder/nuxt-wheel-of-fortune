<template>
    <v-card height="100" class="rounded-0 d-flex flex-column">
        <v-container class="d-flex flex-column flex-grow-1 pt-16">
            <div class="d-flex flex-column align-center gap-4 pt-14">
                <img src="/decorations/success.svg" width="121" height="106"></img>
                <div class="subtitle-1 font-weight-bold">Redeem Successfully!</div>
                <div class="text-body-4 text-center px-6">Congratulation you got {{ voucher.title }}. You can use this
                    voucher
                    based on the
                    T&C.
                </div>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex">
                <v-btn @click="$emit('dismiss')"
                    class="elevation-0 teal white--text flex-grow-1 text-capitalize">Close</v-btn>
            </div>
        </v-container>
    </v-card>
</template>

<script>
export default {
    props: ["voucher"]
}
</script>