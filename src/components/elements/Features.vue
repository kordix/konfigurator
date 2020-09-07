<template>
<!-- <div id="myModal" :class="{visible: $root.overlay, hidden: !$root.overlay}"> -->
<div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
         <div class="modal-content">
      <div class="modal-header" style="background-color:#0B1C43; color: white">
        <h5 class="modal-title" id="exampleModalLongTitle">Przypisz cechom wartość od 1 do 10</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
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
            console.log('save features');
            this.$store.commit('assignFeatures')
        },
        cancelFeatures(){
            console.log('cancel');
            for(let el in this.features){
                this.features[el].value = 0
            }
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