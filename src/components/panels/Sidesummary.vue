<template>
    <div class="card  mb-3" style="width: 100%; display:inline-flex; background:#2B6F6F; color:white">
    <!--   <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body d-flex flex-column">
            <h1 class="card-title">Podsumowanie</h1>
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