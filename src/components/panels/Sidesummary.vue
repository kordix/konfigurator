<template>
<div class="container-fluid" style="padding:0; margin-left:10px">
    <div class="row">
        <div class="row" style="width:100%; background-color: rgb(11, 28, 67); color: white; border-radius:0; padding:0; margin-left:5px; margin-bottom:10px" >
            <h5  class="section-head"  style="margin:5px auto">Podsumowanie</h5>
        </div>
    </div>
    <div class="card  mb-3" style="width: 100%; height:100%; display:inline-flex; border:none; background:white; color:rgb(11, 28, 67)">
    <!--   <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body d-flex flex-column">
            <div v-for="el in form" :key="el.label">
                <h2 class="d-inline-block">{{el.label}} : </h2>
                <h3 class="d-inline-block" v-if="el.label == 'Wymiary'">{{el.value.w}} x {{el.value.h}}</h3>
                <h3 class="d-inline-block" v-else>{{el.name}}</h3>
            </div>
            <div>
                <h2 class="d-inline-block">Cena całkowita : </h2>
                <h3 class="d-inline-block">{{$root.basicPrice + ' zł'}}</h3>
            </div>
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

        }
    },
    computed:{
        form(){
            let form = this.$root.form
            let copy = {}
            for(let el in form){
                if(form[el].value){
                    copy[el] = form[el]
                }
            }
            return copy
        }
    },
    methods:{

    }
}
</script>
<style scoped>
h1{
    font-size: 1.2em;
    font-weight: bold;
}
h2{
    font-size: 0.9em;
    font-weight: bold;
}
h3{
    font-size: 0.8em;
    padding-left: 10px;
}

</style>