<template>

<div class="container-fluid">
    <div class="row">
            <div class="row" style="width:100%; background-color: rgb(11, 28, 67); color: white; border-radius:0; padding:0; margin-left:0" >
                <h5 class="section-head" style="margin:5px auto">Akcesoria</h5>
            </div>
        </div>
    <div class="row">
        <div class="col-4" v-for="add of adds" :key="add.label">

<!--             <div @click="saveCard('color', color.label, color.value); assignColor(color.rgb)" class="card mx-3 my-3" style="width: 100%; display:inline-flex" :style="{background:bgcard(color.value, 'color')}"> -->

        <div class="card mx-3 my-3" style="width: 100%; display:inline-flex" :style="{background:bgcard(add.value, 'add')}">
    <!--         <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">{{add.label}}</h5>
            </div>
        </div>
    </div>
</div>
    <div class="row d-flex justify-content-end">
        <div class="col-3">
            <button style="width:100%" class="btn btn-primary" @click="nextPanel(8)">Dalej</button>
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
            adds:[
                {label: 'poszerzenia', value:'posz'},
                {label: 'okucie', value:'ok'},
                {label: 'klamki', value:'handle'},
            ]
        }
    },
    methods:{

    }
}
</script>
<style scoped>

</style>