<template>
  <v-app class="bg">
    <HomeNavBar class="bg" />
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

<style scoped>
.bg {
  background-color: #212b35;
}
</style>
