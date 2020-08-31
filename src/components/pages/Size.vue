<template>

<div class="container-fluid">
        <div class="card mx-3 my-3" style="width: 100%; display:inline-flex">
    <!--         <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">Szerokość</h5>
                <input type="number" name="" id="" v-model="$root.form.size.value.w">
                <h5 class="card-title">Wysokość</h5>
                <input type="number" name="" id="" v-model="$root.form.size.value.h">
                <button class="btn btn-primary d-block mt-2" @click="changePanel(4, 'none')">Dalej</button>
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
            config:[
                {label: '1 Skrzydło'},
                {label: '2 Skrzydła'}
            ]
        }
    }
}
</script>
<style scoped>

</style>