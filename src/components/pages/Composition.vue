<template>

<div class="container-fluid">
    <template v-for="conf of config">

        <div class="card mx-3 my-3" style="width: 27%; display:inline-flex" :style="{background:bgcard(conf.label, 'conf')}"  :key="conf.label">
    <!--         <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">{{conf.label}}</h5>
                <button class="btn btn-primary" @click="changePanel(3, 'choice', 'conf', conf.label)">Wybierz</button>
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