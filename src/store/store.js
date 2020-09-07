import vue from  'vue';
import Vuex from 'vuex';

vue.use(Vuex);

import system from './modules/system'
import dealer from './modules/dealer'

export default new Vuex.Store({
    modules:{
        system:system,
        dealer:dealer
    },
    state:{
        safety:0,
        thermoinsulation: 0,
        acustics: 0,
        postcode:null,
        pickedDealer: null
    },
    getters:{},
    mutations:{
        assignFeatures(state, {safety, thermoinsulation, acustics}){
            state.safety = safety
            state.thermoinsulation = thermoinsulation
            state.acustics = acustics
        },
        assignOne(state, {key, value}){
            state[key] = value
        }
        
    },
    actions:{


    }
})