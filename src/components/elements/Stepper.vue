<template>
<div class="d-flex flex-row justify-content-between">
    <template v-for="step of steps">
        <div :key="step.num">
        <button @click="changePanel(step.num)" class="btn btn-circle btn-xl" :class="{'btn-outline-primary':$root.activepanel==step.num}" :style="{background:bgcolor(step.num)}" type="submit">{{step.num}}</button>
        <div class="text-center my-3 text-primary font-weight-bold">{{step.label}}</div>

        </div>
        <div class="line" :key="step.label" v-if="step.num != 7"></div>

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
                {num: 6, label: 'Dodatki'},
                {num: 7, label: 'Podsumowanie'}
            ]
        }
    },
    methods:{
        bgcolor(num){
            if(this.$root.activepanel<num){
                return '#007bff98'
            } else if(this.$root.activepanel==num){
                return '#007bffab' 
            } else {
                return '#007bff'
            }
             
        }
    }
}
</script>
<style scoped>

</style>