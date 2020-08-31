<template>

<div class="container-fluid">
    <template v-for="add  of adds">

        <div class="card mx-3 my-3" style="width: 27%; display:inline-flex" :style="{background:bgcard(add.value, 'add')}"  :key="add.label">
    <!--         <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">{{add.label}}</h5>
                <button class="btn btn-primary" @click="changePanel(7, 'choice', 'add', add.label, add.value)">Wybierz</button>
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
            adds:[
                {label: 'szprosy', value:'szpr'},
                {label: 'poszerzenia', value:'posz'},
                {label: 'okucie', value:'ok'},
            ]
        }
    },
    methods:{

    }
}
</script>
<style scoped>

</style>