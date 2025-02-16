<template>
    <div class="py-4 px-5 d-inline-flex flex-wrap properties-promos-item rounded-lg-2 overflow-hidden white--text"
        :style="`background: linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0)), url(${promo.bgImg}) no-repeat center / cover`">
        <div class="text-h6 mb-1">{{ promo.title }}</div>
        <div class="mb-3">
            <div class="text-body-4 properties-promos-descr text-wrap">{{ promo.descr }}</div>
        </div>
        <v-btn rounded color="teal lighten-5" class="teal--text text-lighten-2 text-body-3">Get it now</v-btn>
    </div>
</template>

<script>
export default {
    props: ["promo"]
}
</script>