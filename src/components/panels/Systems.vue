<template>
    <div class="container-fluid">
        <div class="row">
            <div class="row" style="width:100%; background-color: rgb(11, 28, 67); color: white; border-radius:0; padding:0; margin-left:0" >
                <h5  class="section-head" style="margin:5px auto">Systemy</h5>
            </div>
        </div>
        <div class="row">
            <template class="col-4" v-for="system of systems" v-if="systems">
                <div class="col-4" :key="system.label">

                    <div class="card mx-3 my-3 h-80" style=" display:inline-flex" :style="{background:bgcard(system.value, 'system')}" @click="saveCard('system', system.label, system.value)">
                        <img  :src="getPic('system', system.img)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-subtitle">{{system.label}}</h5>
                        </div>
                        <div class="d-flex justify-content-end" style="width:100%; position:relative" data-toggle="popover" data-placement="right" :title="system.label" :data-content="system.popover" data-trigger="hover">

                                <b-icon-info-square-fill  class="mr-2 mb-3"></b-icon-info-square-fill>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="row d-flex justify-content-end">
            <div class="col-3">
                <button style="width:100%" class="btn btn-primary" @click="nextPanel(2)">Dalej</button>
            </div>
        </div>
    </div>
</template>
<script>
import common from '../../mixins/common'
import {mapState} from 'vuex'
export default {
    mixins:[common],
    data(){
        return {

        }
    },
    computed:{
        ...mapState({
            systems: state => state.system.systems
        })
    },
    methods:{

    },
    mounted(){
        $(function () {
        $('[data-toggle="popover"]').popover()
        })
    }
}
</script>
<style scoped>


</style>