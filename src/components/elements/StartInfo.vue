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
                <component :is="step"></component>
            </div>
        </div>
    </div>
    
</template>
<script>
import postcode from './features/Postcode'
import features from './features/Features'
import dealers from './features/Dealers'
export default {
    components:{
        postcode: postcode,
        features: features,
        dealers: dealers,
    },
    data(){
        return {
            step: 'postcode',
        }
    },
    computed:{
        modalTitle(){
            switch (this.step) {
            case "postcode":
                return 'Podaj swój kod pocztowy aby zlokalizować punkty sprzedaży i dostępne produkty';
                break;
            case "dealers":
                return 'Wybierz Dealera';
                break;
            case "features":
                return 'Przypisz cechom wartość od 1 do 10';
                break;
            }
        }
    },
    methods:{
        
        
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