import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import macierz from './macierz'
import store from './store/store'


Vue.config.productionTip = false

new Vue({
  data:{
    activepanel:1,
    transition: 'component-slide-fade',
    macierz: macierz,
    form:{
      system:{value:'', name:'', label:'System'},
      conf:{value:'', name:'', label:'Układ'},
      size:{value:{w:200, h:200},  label:'Wymiary'},
      glazing:{value:'', name:'', label:'Szklenie'},
      color:{value:'', name:'', label:'Kolor'},
      add:{value:'', name:'', label:'Dodatki'},
    }
  },
  computed:{
      basicPrice(){
          let widthRound = Math.floor(this.form.size.value.w/100) * 100
          let heightRound = Math.floor(this.form.size.value.h/100) * 100
          console.log(widthRound, heightRound);
          let match = this.macierz.find((el)=>el.height==heightRound)
          console.log(match);
          console.log(match[widthRound]);
          return this.macierz.find((el)=>el.height==heightRound)[widthRound]
      },
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')
