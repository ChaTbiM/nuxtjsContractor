<template>
  <v-card class="mt-4  mx-sm-12" flat>
    <v-toolbar class="transparent white--text" flat>
      <!-- color="" -->
      <!-- -->
      <v-toolbar-title to="/" nuxt>Logo</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        class="white d-sm-none"
        @click="showMenu"
      ></v-app-bar-nav-icon>

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
    <div v-if="shown">
      <v-card class="mx-auto" width="256">
        <v-navigation-drawer class="deep-purple accent-4" dark permanent>
          <v-list>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              nuxt
              :to="item.url"
            >
              <v-list-item-content>
                <v-list-item-title class="text-center">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <template v-slot:append>
            <div class="pa-2">
              <v-btn nuxt to="/login" outlined block>login</v-btn>
            </div>
            <div class="pa-2">
              <v-btn nuxt to="/signup" block>signup</v-btn>
            </div>
          </template>
        </v-navigation-drawer>
      </v-card>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'HomeNavBar',
  data: () => ({
    shown: true,
    items: [
      { title: 'pricing', url: '/pricing' },
      { title: 'about us', url: '/about' }
    ]
  }),
  methods: {
    showMenu() {
      this.shown = !this.shown
    },
    redirect(url) {
      // console.log(url, 'urlll')
      this.$router.push(url)
    }
  }
}
</script>
<style scoped></style>
