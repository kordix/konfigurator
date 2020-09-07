<template>
    <div class="container-fluid">
        <div class="row">
            <template class="col-4" v-for="system of systems" v-if="systems">
                <div class="col-4" :key="system.label">

                    <div class="card mx-3 my-3 h-100" style=" display:inline-flex" :style="{background:bgcard(system.value, 'system')}" @click="changePanel(2, 'choice', 'system', system.label, system.value)">
                        <img  :src="getPic('system', system.img)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-subtitle">{{system.label}}</h5>
            <!--                 <button class="btn btn-primary" @click="changePanel(2, 'choice', 'system', system.label)">Wybierz</button> -->
                        </div>
                    </div>
                </div>
            </template>
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

    }
}
</script>
<style scoped>

</style>