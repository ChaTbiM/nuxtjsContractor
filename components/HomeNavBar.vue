<template>
  <v-toolbar flat>
    <!-- color="" -->
    <!-- -->
    <v-toolbar-title to="/" nuxt>Logo</v-toolbar-title>
    <v-spacer />

    <v-btn to="/login" nuxt outlined class="mr-4 accent">log in</v-btn>
    <v-btn to="/signup" nuxt outlined large depressed class="mr-4"
      >sign up</v-btn
    >

    <v-btn to="/login" nuxt outlined class="mr-4 seconday">secondary</v-btn>

    <v-btn to="/login" nuxt outlined class="mr-4 success">success</v-btn>

    <v-btn nuxt outlined class="mr-4 info">info</v-btn>

    <v-btn to="/login" nuxt outlined class="mr-4 warning">warning</v-btn>
    <v-btn to="/login" nuxt outlined class="mr-4 error">error</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'HomeNavBar'
}
</script>
