<template>
  <v-card class="mt-4 mx-6 mx-sm-12" flat>
    <v-toolbar class="transparent white--text" flat>
      <!-- color="" -->
      <!-- -->
      <v-toolbar-title to="/" nuxt>Logo</v-toolbar-title>
      <v-spacer />
      <v-btn
        to="/login"
        nuxt
        outlined
        x-large
        class="mr-4 px-8 accent d-none d-sm-inline-flex"
        >log in</v-btn
      >
      <v-btn
        to="/signup"
        nuxt
        outlined
        depressed
        class="mr-4 white--text d-none d-sm-inline-flex "
        >sign up</v-btn
      >
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'HomeNavBar'
}
</script>
<style scoped></style>
