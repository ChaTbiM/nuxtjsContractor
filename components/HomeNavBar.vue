<template>
  <v-app-bar dark flat app>
    <!-- color="" -->
    <!-- -->
    <v-toolbar-title to="/" nuxt>Logo</v-toolbar-title>
    <v-spacer />

    <v-btn to="/login" nuxt outlined class="mr-4">log in</v-btn>
    <v-btn to="/signup" nuxt outlined large depressed class="mr-4"
      >sign up</v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  name: 'HomeNavBar'
}
</script>
