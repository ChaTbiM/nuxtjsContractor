<template>
  <v-container ma-0 pa-0 fill-height class="align-stretch" fluid>
    <v-row justify="center" align="stretch">
      <v-col class="blue-grey lighten-5 ">
        <v-container fill-height class="align-content-center">
          <v-row class="ml-md-10" justify="center">
            <v-col class="ml-6" cols="12" md="6"
              ><h1 class="display-3">Don't Have an account?</h1></v-col
            >
          </v-row>
          <v-row class=" " justify="end">
            <v-col class="text-center mx-auto mt-6" cols="12" md="4"
              ><v-btn large class="px-11" outlined to="/signup" nuxt
                >create account</v-btn
              ></v-col
            >
          </v-row>
        </v-container>
      </v-col>
      <v-col justify="center" align="center">
        <v-container fill-height class="align-content-center ">
          <v-row justify="center">
            <v-col class="mr-md-12" cols="11" md="8">
              <v-card>
                <v-card-title>Log in</v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="form.email"
                      prepend-icon="mdi-account-circle"
                      label="email"
                      type="email"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="form.password"
                      label="password"
                      :type="showPassword ? 'text' : 'password'"
                      prepend-icon="mdi-lock"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      required
                      @click:append="showPassword = !showPassword"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-divider></v-divider>

                <v-card-actions class="px-4">
                  <v-btn block large dark class="primary" @click="login"
                    >Log in</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'guest',
  layout: 'auth',
  data() {
    return {
      showPassword: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      await this.$auth.login({ data: this.form })
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped></style>
