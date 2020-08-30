<template>

<div class="container-fluid">
    <template v-for="conf of config">

        <div class="card mx-3 my-3" style="width: 27%; display:inline-flex" :style="{background:bgcard(conf.label, 'conf')}"  :key="conf.label">
            <img v-if="conf.label.includes('1')" src="../../assets/window.png" class="card-img-top" alt="...">
            <img v-if="conf.label.includes('2')" src="../../assets/1r2ru.png" class="card-img-top" alt="...">
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
                {label: '1 Skrzydło', img:'window.png'},
                {label: '2 Skrzydła', img:'windows.png'}
            ]
        }
    }
}
</script>
<style scoped>

</style>