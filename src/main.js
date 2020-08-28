import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

new Vue({
  data:{
    activepanel:1,
    transition: 'component-slide-fade',
    form:{
      system:{value:'', label:'System'},
      conf:{value:'', label:'Układ'},
      size:{value:{w:200, h:200}, label:'Wymiary'},
      glazing:{value:'', label:'Szklenie'},
      color:{value:'', label:'Kolor'},
      add:{value:'', label:'Dodatki'},
      price:{value:'0.00 zł', label: 'Cena całkowita'}
    }
  },
  router,
  render: h => h(App),
}).$mount('#app')
