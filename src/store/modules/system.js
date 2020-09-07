export default {
    state: () => ({
        systems:[
            {value:'KOMBI',label:'Kombisystem', img:'KOMBI.jpg', safety:10, acustics:7, thermoinsulation: 5, score:0},
            {value:'QUANTIX',label:'QUANTIX', img:'QUANTIX.jpg', safety:7, acustics:5, thermoinsulation: 3, score:0},
            {value:'TREND',label:'TREND', img:'TREND.jpg', safety:4, acustics:6, thermoinsulation: 7, score:0},
            {value:'BBLINE',label:'BB-LINE', img:'BBLINE.jpg', safety:8, acustics:8, thermoinsulation: 10, score:0},
            {value:'KUBUS',label:'KUBUS', img:'KUBUS.jpg', safety:9, acustics:10, thermoinsulation: 7, score:0}
        ],
        sortedSystems: []
    }),
    getters:{},
    mutations:{
        assignSorted(state, res){
            console.log('assignSorted');
            state.systems = res
        }
    },
    actions:{
        suggestSystem({state,rootState, commit}){
            let acustics = rootState.acustics
            let safety = rootState.safety
            let thermoinsulation = rootState.thermoinsulation
            state.systems.forEach((el, idx) => {
                let score = el.safety * (safety/10) + el.thermoinsulation * (thermoinsulation/10) + el.acustics * (acustics/10)
                state.systems[idx].score = score
            });
            let res = state.systems.sort((a, b)=>{return b.score - a.score})
            commit('assignSorted', res)
        }
    }
}