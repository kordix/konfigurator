<template>

<div class="container-fluid">
    <div class="row">
        <div class="col-4" v-for="color of colors" :key="color.label">

            <div @click="saveCard('color', color.label, color.value); assignColor(color.rgb)" class="card mx-3 my-3" style="width: 100%; display:inline-flex" :style="{background:bgcard(color.value, 'color')}">
                    <img src="../../assets/images/kolory/bialy.jpg" class="card-img-top" alt="..." v-if="color.value == 'WHITE'">
                    <img src="../../assets/images/kolory/zielony.jpg" class="card-img-top" alt="..." v-if="color.value == 'GREEN'">
                    <img src="../../assets/images/kolory/jasnydab.jpg" class="card-img-top" alt="..." v-if="color.value == 'OAK'">
                <div class="card-body">
                    <h5 class="card-title">{{color.label}}</h5>
                </div>
            </div>
        </div>
    </div>
    <div class="row d-flex justify-content-end">
        <div class="col-3">
            <button style="width:100%" class="btn btn-primary" @click="nextPanel(6)">Dalej</button>
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
            colors:[
                {label: 'Biały', value:'WHITE', rgb: 'rgb(255,255,255)'},
                {label: 'Zielony', value:'GREEN', rgb: 'rgb(27,91,70)'},
                {label: 'Jasny Dąb', value:'OAK', rgb: 'rgb(191,140,0)'},
            ]
        }
    },
    methods:{
        assignColor(rgb){
            this.$root.profileColor = rgb
        }
    }
}
</script>
<style scoped>

</style>