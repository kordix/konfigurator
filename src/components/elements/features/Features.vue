<template>
    <div>
        <div class="modal-body" @keydown.enter="saveFeatures">
            <div v-for="(feature, name) in features" :key="name" class="pb-5">
                <h5>{{feature.label}}</h5>
                <div class="d-flex justify-content-between">

                    <div v-for="n of 10" :key="'safety'+n" class="form-check form-check-inline">
                        <div>
                            <input v-model="features[name].value" class="form-check-input" type="radio" :name="name" :value="n" :id="'radio' + n">
                            <label style="display:block" class="form-check-label pr-2" :for="'radio'+ n">{{n}}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="cancelFeatures">Pomiń i sam wybierz system okien</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="saveFeatures">Zapisz i zaproponuj najlepsze dla mnie systemy okien</button>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            features:{
                safety:{value:0, label:'Bezpieczeństwo'},
                acustics: {value:0, label:'Akustyka'},
                thermoinsulation:{value:0, label:'Termoizolacja'},
            },
        }
    },
    methods:{
        saveFeatures(){
            let {thermoinsulation, safety, acustics} = this.features
            if(thermoinsulation != 0 || safety != 0 || acustics !=0){

                this.$store.commit('assignFeatures', {safety: safety.value, thermoinsulation: thermoinsulation.value, acustics: acustics.value} )
                this.$store.dispatch('suggestSystem')
                $('#modalCenter').modal('hide');
            }
        },
        cancelFeatures(){
            for(let el in this.features){
                this.features[el].value = 0
            }
        },
    }
}
</script>
<style scoped>

</style>