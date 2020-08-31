<template>

<div class="container-fluid">
    <template v-for="color of colors">

        <div class="card mx-3 my-3" style="width: 27%; display:inline-flex" :style="{background:bgcard(color.label, 'color')}"  :key="color.label">
    <!--         <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">{{color.label}}</h5>
                <button class="btn btn-primary" @click="changePanel(6, 'choice', 'color', color.label)">Wybierz</button>
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
            colors:[
                {label: 'biały'},
                {label: 'sosna'},
                {label: 'butelkowy'},
            ]
        }
    },
    methods:{

    }
}
</script>
<style scoped>

</style>