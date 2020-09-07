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
        acustics: 0
    },
    getters:{},
    mutations:{
        assignFeatures(state, {safety, thermoinsulation, acustics}){
            state.safety = safety
            state.safety = safety
            state.safety = safety
        }
    },
    actions:{}
})