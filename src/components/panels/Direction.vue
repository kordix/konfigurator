<template>
    <div>
        <div class="row"  v-for="leaf of leaves" :key="leaf">
            <div class="col-2">
                <div class="card my-3 leaf" style="height:100px; width:100px">
                    <div class="card-body d-flex flex-column justify-content-center">
                            <h5 style="font-size:0.7em;text-align:center" class="card-title">Kwatera</h5>
                            <h1 style="text-align:center">{{leaf}}</h1>
                    </div>
                </div>
            </div>
        
            <template v-for="dir of dirs">
                <div class="col-2" :key="dir.label">
                    <div class="card my-3" @click="saveCard(getDir(leaf),dir.label, dir.value)" style=" display:inline-flex; height:100px; width:100px">
            <!--             <img v-if="conf.label.includes('1')" src="../../assets/window.png" class="card-img-top" alt="..."> -->
                        <img :src="getPic('kierunek',dir.img)" class="card-img-top" alt="..." style="height:70%; width:auto">
                        <div class="card-body pt-0" :style="{background:bgcard(dir.value, getDir(leaf))}">
                            <h5 style="font-size:0.7em; text-align:center" class="card-title">{{dir.label}}</h5>
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
            dirs:[
                {value:'RU',label:'Rozwierno uchylne', img:'ru.png'},
                {value:'R',label:'Rozwierne', img:'r.png'},
                {value:'U',label:'Uchylne', img:'u.png'},
                {value:'FIXS',label:'Fix w skrzydle', img:'fixs.png'},
                {value:'FIX',label:'Fix w ramie', img:'fix.png'}
            ],
        }
    },
    methods:{
        getDir(leaf){
            console.log(leaf);
            if(leaf == 1){
                return 'dir1'
            } else if(leaf == 2){
                return 'dir2'
            } else if (leaf == 3){
                return 'dir3'
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