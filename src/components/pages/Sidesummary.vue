<template>
<div class="card  my-3" style="width: 100%; display:inline-flex; background:#BEC3C8">
    <!--         <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">Podsumowanie</h5>
                <div v-for="el in form" :key="el.label">
                    <h2 class="d-inline-block">{{el.label}} : </h2>
                    <h3 class="d-inline-block" v-if="el.label == 'Wymiary'">{{el.value.w}} x {{el.value.h}}</h3>
                    <h3 class="d-inline-block" v-else>{{el.value}}</h3>
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

</style>