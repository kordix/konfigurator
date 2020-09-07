<template>

<div class="container-fluid">
    <template v-for="color of colors">

        <div @click="changePanel(6, 'choice', 'color', color.label, color.value)" class="card mx-3 my-3" style="width: 27%; display:inline-flex" :style="{background:bgcard(color.value, 'color')}"  :key="color.label">
                <img src="../../assets/images/kolory/bialy.jpg" class="card-img-top" alt="..." v-if="color.value == 'WHITE'">
                <img src="../../assets/images/kolory/zielony.jpg" class="card-img-top" alt="..." v-if="color.value == 'GREEN'">
                <img src="../../assets/images/kolory/jasnydab.jpg" class="card-img-top" alt="..." v-if="color.value == 'OAK'">
            <div class="card-body">
                <h5 class="card-title">{{color.label}}</h5>
            </div>
        </div>
    </template>

</div>

    
</template>
<script>
import common from '../../mixins/common'
export default {
    mixins:[common],
    data(){
        return {
            colors:[
                {label: 'Biały', value:'WHITE'},
                {label: 'Zielony', value:'GREEN'},
                {label: 'Jasny Dąb', value:'OAK'},
            ]
        }
    },
    methods:{

    }
}
</script>
<style scoped>

</style>