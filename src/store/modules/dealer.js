export default {
    state: () => ({
        dealers:[
            {name:'Jan Krzak', id:1, city: "Wejherowo", street:"Dworcowa 1", postcode:'84-202'},
            {name:'Andrzej Głowacki', id:2, city: "Luzino", street:"Polna 1", postcode:'84-242'},
            {name:'Adam Kowalski', id:3, city: "Gdańsk", street:"Aleja Grunwaldzka 101", postcode:'80-008'},
            {name:'Robert Sienkiewicz', id:4, city: "Kraków", street:"Św. Jana 11", postcode:'30-015'}
        ]
    }),
    getters:{
        nearDealers(state,getters, rootState){
            let code = rootState.postcode.slice(0,2)
            let res = state.dealers.filter((el)=>{
                return el.postcode.slice(0,2) == code
            })
            return res
        }
    },
    mutations:{

    },
    actions:{

    }
}