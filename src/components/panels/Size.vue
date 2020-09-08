<template>

<div class="container-fluid">
    <div class="row">
        <div class="col-4">
            <div class="card mx-3 my-3">
        <!--         <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                    <h5 class="card-title">Szerokość</h5>
                    <input type="number" name="" id="" v-model="$root.form.size.value.w">
                    <h5 class="card-title">Wysokość</h5>
                    <input type="number" name="" id="" v-model="$root.form.size.value.h">
                    <button class="btn btn-primary d-block mt-2" @click="nextPanel(4)">Dalej</button>
                </div>
            </div>
        </div>
        <div class="col-7">

            <scheme style="display:inline-flex"></scheme>
        </div>
    </div>
</div>

    
</template>
<script>
import scheme from '../elements/Scheme'
import common from '../../mixins/common'
export default {
    components:{scheme},
    mixins:[common],
    data(){
        return {

        }
    },

}
</script>
<style scoped>

</style>