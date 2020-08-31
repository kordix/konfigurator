<template>

<div class="container-fluid">
    <div class="row">
       
    <template v-for="conf of config">
         <div class="col-4" :key="conf.label">

            <div class="card mx-3 my-3 h-100" @click="changePanel(3, 'choice', 'conf', conf.label, conf.value)" style=" display:inline-flex" :style="{background:bgcard(conf.value, 'conf')}"  >
    <!--             <img v-if="conf.label.includes('1')" src="../../assets/window.png" class="card-img-top" alt="..."> -->
                <img  :src="getPic('budowa',conf.img)" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{conf.label}}</h5>
<!--                     <button class="btn btn-primary" @click="changePanel(3, 'choice', 'conf', conf.label)">Wybierz</button> -->
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
        return {
            config:[
                {value:'1S',label:'Jednoskrzydłowe', img:'1S.png'},
                {value:'2S',label:'Dwuskrzydłowe', img:'2S.png'},
                {value:'3S',label:'Trzyskrzydłowe', img:'3S.png'},
            ]
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>