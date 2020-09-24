<template>

<div class="container-fluid">
    <div class="row">
            <div class="row" style="width:100%; background-color: rgb(11, 28, 67); color: white; border-radius:0; padding:0; margin-left:0" >
                <h5 class="section-head" style="margin:5px auto">Systemy</h5>
            </div>
        </div>
        <div class="row" style="padding:0 50px">
            <scheme></scheme>

        </div>

</div>

    
</template>
<script>
import scheme from '../elements/Scheme'
import common from '../../mixins/common'
export default {
    mixins:[common],
    components:{scheme},
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
<style scoped>

</style>