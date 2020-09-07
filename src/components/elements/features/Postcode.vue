<template>
    <div>
        <div class="modal-body">
            <div class="d-flex justify-content-between">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Kod pocztowy</span>
                    </div>
                    <input @keydown.enter="savePostcode" type="text" v-model="postcode" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="savePostcode">Znajdź najbliższego dealera</button>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            postcode:null,
        }
    },
    methods:{
        savePostcode(){
            if(this.postcode != null){
                this.$store.commit('assignOne', {key:"postcode", value:this.postcode})
                this.$parent.step = "dealers"

            }
        }
    },
    mounted(){

    }
}
</script>
<style scoped>

</style>