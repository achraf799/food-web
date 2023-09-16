import Vue from 'vue'
import App from './App.vue'
import "./assets/Style.css"
import "./assets/Style_phone.css"
import "./assets/Style_tab.css"



Vue.config.productionTip = false


new Vue({
  render: h => h(App)
}).$mount('#app')
