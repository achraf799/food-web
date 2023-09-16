import Vue from 'vue'
import App from './App.vue'
import "./assets/Style.css"
import "./assets/Style_phone.css"
import "./assets/Style_tab.css"
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'


Vue.config.productionTip = false

Vue.use(Vuetify)

// const vuetify = new Vuetify()


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
