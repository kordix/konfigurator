<template>
<div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header" style="background-color:#0B1C43; color: white">
                <h5 class="modal-title" id="exampleModalLongTitle">{{modalTitle}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" v-if="step == 1">
                <div class="d-flex justify-content-between">
                    <div>
                        <div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Kod pocztowy</span>
                                </div>
                                <input type="text" v-model="postcode" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-body" v-if="step == 2">
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
            <div class="modal-footer" v-if="step ==1">
                <button type="button" class="btn btn-primary" @click="savePostcode">Znajdź najbliższego dealera</button>
            </div>
            <div class="modal-footer" v-if="step == 2">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="cancelFeatures">Pomiń i sam wybierz system okien</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="saveFeatures">Zapisz i zaproponuj najlepsze dla mnie systemy okien</button>
            </div>

        </div>
    </div>
</div>
    
</template>
<script>
export default {
    data(){
        return {
            step: 1,
            postcode:null,
            features:{
                safety:{value:0, label:'Bezpieczeństwo'},
                acustics: {value:0, label:'Akustyka'},
                thermoinsulation:{value:0, label:'Termoizolacja'},
            },

        }
    },
    computed:{
        modalTitle(){
            return this.step == 1? "Podaj swój kod pocztowy aby zlokalizować punkty sprzedaży i dostępne produkty" :'Przypisz cechom wartość od 1 do 10'
        }
    },
    methods:{
        saveFeatures(){
            console.log('save features');
            let {thermoinsulation, safety, acustics} = this.features
            this.$store.commit('assignFeatures', {safety: safety.value, thermoinsulation: thermoinsulation.value, acustics: acustics.value} )
        },
        cancelFeatures(){
            console.log('cancel');
            for(let el in this.features){
                this.features[el].value = 0
            }
        },
        savePostcode(){
            //this.$store.commit('assignPostcode', this.postcode)
            this.step = 2
        }
    },
    created(){

    }
}
</script>
<style scoped>
.close {
    color: #fff!important; 
    opacity: 1!important;
}
</style>