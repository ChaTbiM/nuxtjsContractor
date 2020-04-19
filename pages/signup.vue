<template>
  <v-container ma-0 pa-0 fill-height class="align-stretch" fluid>
    <v-row justify="center" align="stretch">
      <v-col cols="12" md="6" justify="center" align="center">
        <v-container fill-height class="align-content-center ">
          <v-row justify="center">
            <v-col class="mx-auto mr-md-12" cols="11" sm="8">
              <v-card>
                <v-card-title>sign up</v-card-title>
                <v-card-text>
                  <v-form ref="signUpForm">
                    <v-text-field
                      v-model="form.name"
                      prepend-icon="mdi-account-circle"
                      label="first and last name"
                      type="text"
                      :rules="nameRules"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="form.email"
                      prepend-icon="mdi-account-circle"
                      label="email"
                      type="email"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="form.password"
                      label="password"
                      :type="showPassword ? 'text' : 'password'"
                      prepend-icon="mdi-lock"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="passwordRules"
                      required
                      @click:append="showPassword = !showPassword"
                    ></v-text-field>
                    <v-checkbox
                      v-model="agreeToTerms"
                      label="Agree to terms and conditions"
                      :rules="agreeToTermsRules"
                      required
                    ></v-checkbox>
                  </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-4 ">
                  <v-btn large class="primary px-6 px-sm-12" @click="register"
                    >sign up</v-btn
                  >
                  <v-spacer />
                  <v-btn large class="secondary" @click="resetForm">
                    reset</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" md="6" class="blue-grey lighten-5 ">
        <v-container fill-height class="mr-12 align-content-center ">
          <v-row justify="center">
            <v-col
              class="mx-auto ml-md-12 text-center "
              cols="12"
              sm="6"
              lg="5"
            >
              <h1 class="display-3">Easy way to ,</h1>
              <p class="title mt-2	">
                track <span class="success">Profits</span> /
                <span class="error">Loses</span>
              </p>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="mx-auto ml-sm-12 text-center" cols="12" md="5"
              ><v-btn large class="px-12" outlined to="/login" nuxt
                >log in</v-btn
              ></v-col
            >
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
        name: '',
        email: '',
        password: ''
      },
      agreeToTerms: false,
      nameRules: [(value) => value.length > 3 || 'full name is required'],
      emailRules: [
        (value) => value.length > 0 || 'Email is required',
        (value) => value.indexOf('@') !== 0 || 'Email should have a username.',
        (value) => value.includes('@') || 'Email should include an @ symbol.',
        (value) =>
          value.indexOf('.') - value.indexOf('@') > 1 ||
          'Email should contain a valid domain.',
        (value) =>
          value.includes('.') || 'Email should include a period symbol.',
        (value) =>
          value.indexOf('.') <= value.length - 3 ||
          'Email should contain a valid domain extension.'
      ],
      passwordRules: [
        (value) => !!value || 'Password is required',
        (value) => value.length >= 6 || 'Password must be at least 6 characters'
      ],
      agreeToTermsRules: [
        (value) =>
          !!value ||
          'You must agree to the terms and conditions to sign up for an account.'
      ]
    }
  },
  methods: {
    validateForm() {
      return this.$refs.signUpForm.validate()
    },
    resetForm() {
      this.$refs.form.reset()
    },
    async register() {
      if (this.validateForm()) {
        await this.$axios.$post('/register', this.form)
        this.$auth.login({ data: this.form })
        this.$router.push('/dashboard')
      }
    }
  }
}
</script>

<style scoped></style>
