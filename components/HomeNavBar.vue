<template>
  <v-card flat>
    <v-toolbar flat>
      <!-- color="" -->
      <!-- -->
      <v-toolbar-title to="/" nuxt>Logo</v-toolbar-title>
      <v-spacer />

      <v-btn to="/login" nuxt outlined class="mr-4 accent">log in</v-btn>
      <v-btn to="/signup" nuxt outlined large depressed class="mr-4"
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
