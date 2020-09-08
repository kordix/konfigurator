<template>
    <div class="d-flex flex-row justify-content-between">
        <template v-for="step of steps">
            <div :key="step.num">
                <button @click="nextPanel(step.num)" class="btn btn-circle btn-xl" :class="{'btn-outline-primary':$root.activepanel==step.num}" :style="{background:bgcolor(step.num)}" type="submit">{{step.num}}</button>
                <div class="text-center my-2 font-weight-bold step-title" style="font-size:0.9rem">{{step.label}}</div>
            </div>
            <div class="line" :key="step.label" v-if="step.num != (steps.length)"></div>
        </template>
    </div>
</template>
<script>
import common from '../../mixins/common'
export default {
    mixins:[common],
    data(){
        return {
            steps:[
                {num: 1, label: 'System'},
                {num: 2, label: 'Układ'},
                {num: 3, label: 'Wymiary'},
                {num: 4, label: 'Szklenie'},
                {num: 5, label: 'Kolor'},
/*                 {num: 6, label: 'Dodatki'}, */
                {num: 6, label: 'Razem'}
            ]
        }
    },
    methods:{
        bgcolor(num){
            if(this.$root.activepanel<num){
                return '#1d315fa8'
            } else if(this.$root.activepanel==num){
                return '#1d315fa8' 
            } else {
                return '#1D315F'
            }
             
        }
    }
}
</script>
<style scoped>

</style>