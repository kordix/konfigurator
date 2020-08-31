<template>

<div class="container-fluid">
        <div class="row">
       
            <template class="col-4" v-for="system of systems">
                <div class="col-4" :key="system.label">

                    <div class="card mx-3 my-3 h-100" style=" display:inline-flex" :style="{background:bgcard(system.value, 'system')}" @click="changePanel(2, 'choice', 'system', system.label, system.value)">
                        <img  :src="getPic('system', system.img)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-subtitle">{{system.label}}</h5>
            <!--                 <button class="btn btn-primary" @click="changePanel(2, 'choice', 'system', system.label)">Wybierz</button> -->
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
            systems:[
                {value:'KOMBI',label:'Kombisystem', img:'KOMBI.jpg'},
                {value:'QUANTIX',label:'QUANTIX', img:'QUANTIX.jpg'},
                {value:'TREND',label:'TREND', img:'TREND.jpg'},
                {value:'BBLINE',label:'BB-LINE', img:'BBLINE.jpg'},
                {value:'KUBUS',label:'KUBUS', img:'KUBUS.jpg'}
            ]
        }
    },
    methods:{

    }
}
</script>
<style scoped>

</style>