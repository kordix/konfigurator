<template>

<div class="container-fluid">
    <template v-for="system of systems">

        <div class="card mx-3 my-3" style="width: 27%; display:inline-flex" :style="{background:bgcard(system.label, 'system')}" :key="system.label">
    <!--         <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">{{system.label}}</h5>
                <button class="btn btn-primary" @click="changePanel(2, 'choice', 'system', system.label)">Wybierz</button>
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
            systems:[
                {label: 'KUBUS'},
                {label: 'DEKO'},
                {label: 'SMOOVIO'},
            ]
        }
    },
    methods:{

    }
}
</script>
<style scoped>

</style>