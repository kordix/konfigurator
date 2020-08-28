<template>

<div class="container-fluid">
    <template v-for="glazing of glazings">

        <div class="card mx-3 my-3" style="width: 27%; display:inline-flex" :style="{background:bgcard(glazing.label, 'glazing')}"  :key="glazing.label">
    <!--         <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">{{glazing.label}}</h5>
                <button class="btn btn-primary" @click="changePanel(5, 'choice', 'glazing', glazing.label)">Wybierz</button>
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
            glazings:[
                {label: 'opcja 1'},
                {label: 'opcja 2'},
                {label: 'opcja 3'},
            ]
        }
    },
    methods:{

    }
}
</script>
<style scoped>

</style>