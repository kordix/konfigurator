import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import macierz from './macierz'
import store from './store/store'
import JQuery from 'jquery'
window.$ = JQuery

import { BootstrapVue, BIcon, BIconInfoSquareFill} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon);
Vue.component('BIconInfoSquareFill', BIconInfoSquareFill)


Vue.config.productionTip = false

new Vue({
  data:{
    grillesPanel: 'rodzaj',
    compositionPanel: 'kwatery',
    activepanel:1,
    transition: 'component-slide-fade',
    macierz: macierz,
    form:{
      system:{value:'', name:'', label:'System'},
      conf:{value:'', name:'', label:'Rodzaj okna'},
      dir1:{value:'', name:'', label:'Kwatera 1'},
      dir2:{value:'', name:'', label:'Kwatera 2'},
      dir3:{value:'', name:'', label:'Kwatera 3'},
      grilleskind:{value:'', name:'', label:'Rodzaj szprosów'},
      grillesconf1:{value:'', name:'', label:'Kwatera 1'},
      grillesconf2:{value:'', name:'', label:'Kwatera 2'},
      grillesconf3:{value:'', name:'', label:'Kwatera 3'},
      size:{value:{w:500, h:400},  label:'Wymiary'},
      glazing:{value:'', name:'', label:'Szklenie'},
      color:{value:'', name:'', label:'Kolor'},
      add:{value:'', name:'', label:'Dodatki'},
    },
    direction:{otwieranie1:'RU', otwieranie2: 'R', otwieranie3: 'FIX'},
    profileColor:'#ffffff',
    glazingColor: '#0195af',
    handleColor: '#ffffff'
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
