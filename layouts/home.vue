<template>
  <v-app>
    <HomeNavBar />

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import HomeNavBar from '~/components/HomeNavBar'
export default {
  name: 'LayoutsHome',
  components: {
    HomeNavBar
  }
}
</script>

<style></style>
