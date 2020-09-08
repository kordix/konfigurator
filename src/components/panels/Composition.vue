<template>

<div class="container-fluid">
    <div class="row">
        <div class="col d-flex pr-0">
            <button @click="changePanel('kwatery')" style="width:100%; background-color: rgb(11, 28, 67); color: white; border-radius:0" :style="{backgroundColor: btnColor('kwatery')}" class="py-2 btn">Liczba kwater</button>
            <button @click="changePanel('otwieranie')"  style="width:100%; background-color: rgb(11, 28, 67); color: white; border-radius:0" :style="{backgroundColor: btnColor('otwieranie')}" class="py-2 btn">Kierunek otwierania</button>
        </div>
    </div>
    <transition :name="transition" mode="out-in">
        <div class="row" v-if="$root.compositionPanel == 'kwatery'" key="kwatery">
        
        <template v-for="conf of config">
            <div class="col-4" :key="conf.label">

                <div class="card my-3 h-100" @click="saveCard('conf', conf.label, conf.value)" style=" display:inline-flex" :style="{background:bgcard(conf.value, 'conf')}" >
        <!--             <img v-if="conf.label.includes('1')" src="../../assets/window.png" class="card-img-top" alt="..."> -->
                    <img  :src="getPic('budowa',conf.img)" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{conf.label}}</h5>
                        
                    </div>
                </div>
                
            </div>
        </template>
        </div>
        <div v-if="$root.compositionPanel == 'otwieranie'" key="otwieranie">

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

    </transition>
    <div class="row d-flex justify-content-end">
        <div class="col-3">
            <button style="width:100%" class="btn btn-primary" @click="$root.compositionPanel== 'kwatery'? changePanel('otwieranie'): nextPanel(3)">Dalej</button>
        </div>
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
            ],
            dirs:[
                {value:'RU',label:'Rozwierno uchylne', img:'ru.png'},
                {value:'R',label:'Rozwierne', img:'r.png'},
                {value:'U',label:'Uchylne', img:'u.png'},
                {value:'FIXS',label:'Fix w skrzydle', img:'fixs.png'},
                {value:'FIX',label:'Fix w ramie', img:'fix.png'}
            ],
            transition: 'component-slide-fade'
        }
    },
    methods:{
        btnColor(type){
            return this.$root.compositionPanel == type ? 'rgb(11, 28, 67)' : 'rgba(11, 28, 67, 0.66)'
        },
        changePanel(type){
            let prev = this.$root.compositionPanel
            let next = type
            if(prev == 'kwatery' && next == 'otwieranie'){
                this.transition = 'component-slide-fade'
            } else {
                this.transition =  'component-slide-out'
            }
            this.$root.compositionPanel = type
        },
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
        saveDir(){

        }
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
<style scoped>
.leaf {

}

</style>