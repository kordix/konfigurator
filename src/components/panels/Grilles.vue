<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col d-flex pr-0">
                <button @click="changePanel('rodzaj')" style="width:100%; background-color: rgb(11, 28, 67); color: white; border-radius:0" :style="{backgroundColor: btnColor('rodzaj')}" class="py-2 btn">Rodzaj szprosu</button>
                <button @click="changePanel('uklad')"  style="width:100%; background-color: rgb(11, 28, 67); color: white; border-radius:0" :style="{backgroundColor: btnColor('uklad')}" class="py-2 btn">Układ szprosu</button>
            </div>
        </div>

        <transition :name="transition" mode="out-in">
            <component v-bind:is="view"></component>
        </transition>

        <div class="row d-flex justify-content-end">
            <div class="col-3">
                <button style="width:100%" class="btn btn-primary" @click="$root.grillesPanel== 'rodzaj'? changePanel('uklad'): nextPanel(7)">Dalej</button>
            </div>
        </div>
    </div>

</template>
<script>
import common from '../../mixins/common'
import kind from './GrillesKind'
import conf from './GrillesConf'
export default {
    mixins:[common],
    components:{kind, conf},
    data(){
        return {
            transition: 'component-slide-fade'
        }
    },
    methods:{
        btnColor(type){
            return this.$root.grillesPanel == type ? 'rgb(11, 28, 67)' : 'rgba(11, 28, 67, 0.66)'
        },
        changePanel(type){
            let prev = this.$root.grillesPanel
            let next = type
            if(prev == 'rodzaj' && next == 'uklad'){
                this.transition = 'component-slide-fade'
            } else {
                this.transition =  'component-slide-out'
            }
            this.$root.grillesPanel = type
        },
    },
    computed:{
        view(){
            let panel = this.$root.grillesPanel
            return panel == 'rodzaj'? 'kind': 'conf'
        }
    }
}
</script>
<style scoped>


</style>