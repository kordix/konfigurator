<template>
    <div>
        <div class="row"  v-for="leaf of leaves" :key="leaf">
            <div class="col-2">
                <div class="card my-3 leaf h-90 w-100">
                    <div class="card-body d-flex flex-column justify-content-center">
                            <h5 style="font-size:0.7em;text-align:center" class="card-title">Kwatera</h5>
                            <h1 style="text-align:center">{{leaf}}</h1>
                    </div>
                </div>
            </div>
        
            <template v-for="conf of confs">
                <div class="col-4" :key="conf.label">
                    <div class="card my-3 h-90 w-100" @click="saveCard(getGrillesConf(leaf),conf.label, conf.value)" style=" display:inline-flex;">
            <!--             <img v-if="conf.label.includes('1')" src="../../assets/window.png" class="card-img-top" alt="..."> -->
                        <img :src="getPic('szprosy',conf.img)" class="card-img-top" alt="..." style="height:60%; width:50%;margin:5px auto">
                        <div class="card-body pt-2 pb-1" :style="{background:bgcard(conf.value, getGrillesConf(leaf))}">
                            <h5 style="font-size:0.7em; text-align:center" class="card-title">{{conf.label}}</h5>
                        </div>
                    </div>  
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import common from '../../mixins/common'
export default {
    mixins:[common],
    data(){
        return{
            confs:[
                {value:'1H1V',label:'1 szpros pionowo i 1 szpros pionowo', img:'szpros1.png'},
                {value:'2H2V',label:'2 szprosy pionowo i 2 szprosy pionowo', img:'szpros2.png'},
            ],
        }
    },
    methods:{
        getGrillesConf(leaf){
            console.log(leaf);
            if(leaf == 1){
                return 'grillesconf1'
            } else if(leaf == 2){
                return 'grillesconf2'
            } else if (leaf == 3){
                return 'grillesconf3'
            }
        },
    },
    computed:{
        leaves(){
            let conf = this.$root.form.conf.value
            if(conf == '1S'){
                return [1]
            } else if(conf == '2S'){
                return [1,2]
            } else if (conf == '3S'){
                return [1,2,3]
            }
        }
    }
}
</script>