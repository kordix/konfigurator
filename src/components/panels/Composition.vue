<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col d-flex pr-0">
                <button @click="changePanel('kwatery')" style="width:100%; background-color: rgb(11, 28, 67); color: white; border-radius:0" :style="{backgroundColor: btnColor('kwatery')}" class="py-2 btn">Liczba kwater</button>
                <button @click="changePanel('otwieranie')"  style="width:100%; background-color: rgb(11, 28, 67); color: white; border-radius:0" :style="{backgroundColor: btnColor('otwieranie')}" class="py-2 btn">Kierunek otwierania</button>
            </div>
        </div>

        <transition :name="transition" mode="out-in">
            <component v-bind:is="view"></component>
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
import leaves from './Leaves'
import direction from './Direction'
export default {
    mixins:[common],
    components:{leaves, direction},
    data(){
        return {
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
    },
    computed:{
        view(){
            let panel = this.$root.compositionPanel
            return panel == 'kwatery'? 'leaves': 'direction'
        }
    }
}
</script>
<style scoped>


</style>