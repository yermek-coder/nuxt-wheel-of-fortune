<template>
  <v-app dark>
    <v-main>
      <Nuxt class="default-layout" />
      <LayoutBottomNavigation />
    </v-main>
    <Modals />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
