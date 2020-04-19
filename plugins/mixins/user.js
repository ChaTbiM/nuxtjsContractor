import Vue from 'vue'
import { mapState } from 'vuex'

const User = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapState({
          user: (state) => state.auth.user,
          loggedIn: (state) => state.auth.loggedIn
        })
      }
    })
  }
}

Vue.use(User)
