<template>
  <div>
    <h1>dashaboard content</h1>
    <p>welcome {{ user.name }}</p>

    <v-btn @click.prevent="logout">Logout</v-btn>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
