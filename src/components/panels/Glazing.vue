<template>

<div class="container-fluid">
    <div class="row">
            <div class="row" style="width:100%; background-color: rgb(11, 28, 67); color: white; border-radius:0; padding:0; margin-left:0" >
                <h5 class="section-head" style="margin:5px auto">Szklenie</h5>
            </div>
        </div>
    <div class="row">
        <div class="col-4" v-for="glazing of glazings" :key="glazing.label">

            <div @click="saveCard( 'glazing', glazing.label, glazing.value)" class="card mx-3 my-3" style="width: 100%; display:inline-flex" :style="{background:bgcard(glazing.value, 'glazing')}">
    <!--             <img  :src="getPic('szyby', glazing.img)" class="card-img-top" alt="..."> -->
                <img  src='../../assets/images/szyby/2szyby.png' class="card-img-top" alt="..." v-if="glazing.value == '1K'">
                <img  src='../../assets/images/szyby/3szyby.png' class="card-img-top" alt="..." v-if="glazing.value == '2K'">
                <img  src='../../assets/images/szyby/4szyby.png' class="card-img-top" alt="..." v-if="glazing.value == '3K'">
                <div class="card-body">
                    <h5 class="card-title">{{glazing.label}}</h5>
    <!--                 <button class="btn btn-primary" @click="changePanel(5, 'choice', 'glazing', glazing.label, glazing.value)">Wybierz</button> -->
                </div>
            </div>
        </div>

    </div>
    <div class="row d-flex justify-content-end">
        <div class="col-3">
            <button style="width:100%" class="btn btn-primary" @click="nextPanel(5)">Dalej</button>
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