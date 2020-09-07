import vue from  'vue';
import Vuex from 'vuex';
vue.use(Vuex);
import system from './modules/system'

export default new Vuex.Store({
    modules:{
        system:system
    },
    state:{
        safety:0,
        thermoinsulation: 0,
        acustics: 0,
        postcode:null
    },
    getters:{},
    mutations:{
        assignFeatures(state, {safety, thermoinsulation, acustics}){
            state.safety = safety
            state.thermoinsulation = thermoinsulation
            state.acustics = acustics
        },
        assignPostcode(state, postcode){
            state.postcode  = postcode
        }
    },
    actions:{}
})