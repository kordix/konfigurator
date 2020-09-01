<template>

<div class="container-fluid">
    <template v-for="glazing of glazings">

        <div @click="changePanel(5, 'choice', 'glazing', glazing.label, glazing.value)" class="card mx-3 my-3" style="width: 28%; display:inline-flex" :style="{background:bgcard(glazing.value, 'glazing')}"  :key="glazing.label">
<!--             <img  :src="getPic('szyby', glazing.img)" class="card-img-top" alt="..."> -->
            <img  src='../../assets/images/szyby/2szyby.png' class="card-img-top" alt="..." v-if="glazing.value == '1K'">
            <img  src='../../assets/images/szyby/3szyby.png' class="card-img-top" alt="..." v-if="glazing.value == '2K'">
            <img  src='../../assets/images/szyby/4szyby.png' class="card-img-top" alt="..." v-if="glazing.value == '3K'">
            <div class="card-body">
                <h5 class="card-title">{{glazing.label}}</h5>
<!--                 <button class="btn btn-primary" @click="changePanel(5, 'choice', 'glazing', glazing.label, glazing.value)">Wybierz</button> -->
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
            glazings:[
                {label: 'Pakiet 2-szybowy', value:'1K', img: '2szyby.png'},
                {label: 'Pakiet 3-szybowy', value:'2K', img: '3szyby.png'},
                {label: 'Pakiet 4-szybowy', value:'3K', img: '4szyby.png'},
            ]
        }
    },
    methods:{

    }
}
</script>
<style scoped>

</style>