<template>
  <v-container ma-0 pa-0 fill-height class="align-stretch" fluid>
    <v-row justify="center" align="stretch">
      <v-col class="blue-grey lighten-5">
        <v-container fill-height class="align-content-center ">
          <v-row justify="center">
            <v-col class="ml-10" cols="5"
              ><h1 class="display-3">Don't Have an account?</h1></v-col
            >
          </v-row>
          <v-row justify="end">
            <v-col class="mt-6" cols="8"
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
            <v-col class="mr-10" cols="6">
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
                  <v-btn block large class="success" @click="submit"
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
    submit() {
      //   if (this.validateForm()) {
      this.$axios
        .post('/testlogin', {
          name: 'this.form.name',
          password: 'this.form.password',
          email: 'this.form.email'
        })
        .then((response) => console.log(response, 'login response :) '))
      //   }
    }
  }
}
</script>

<style scoped></style>
