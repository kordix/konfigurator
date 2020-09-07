<template>
    <div>
        <div class="modal-body">
            <div v-for="dealer in dealers" :key="dealer.id" class="form-check pb-5">
                <input @keydown.enter="saveDealer" v-model="pick" class="form-check-input" type="radio" name="dealer" :value="dealer" :id="dealer.id">
                <label class="form-check-label pr-2" for="dealer">
                    <p class="mb-0">{{dealer.name}}</p>
                    <p class="mb-0">{{dealer.postcode}}, {{dealer.city}}</p>
                    <p class="mb-0">{{dealer.street}}</p>
                </label>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="goBack">Wróć</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="saveDealer">Dalej</button>
        </div>
    </div>
    
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            pick: null
        }
    },
    computed:{
        ...mapGetters({
            dealers: 'nearDealers'
        })
    },
    methods:{
        saveDealer(){
            if(this.pick != null){

                console.log('save dealer');
                this.$store.commit('assignOne', {key: 'pickedDealer', value:this.pick})
                this.$parent.step = 'features'
            }
        },
        goBack(){
            console.log('go back');
            this.$parent.step = 'postcode'
        }
    }
}
</script>
<style scoped>

</style>