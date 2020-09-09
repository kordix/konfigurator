<template>
    <div class="row">
        <template v-for="kind of kinds">
            <div class="col-6" :key="kind.label">
                <div class="card h-100 w-100 mt-2" @click="saveCard('grilleskind', kind.label, kind.value)" style=" display:inline-flex" :style="{background:bgcard(kind.value, 'grilleskind')}" >
        <!--             <img v-if="conf.label.includes('1')" src="../../assets/window.png" class="card-img-top" alt="..."> -->
                    <!-- <img  :src="getPic('budowa',conf.img)" class="card-img-top" alt="..."> -->
                    <div class="card-body">
                        <h5 class="card-title">{{kind.label}}</h5>
                    </div>
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
            kinds:[
                {value:'BRAK',label:'Bez szprosów', img:''},
                {value:'NAKLEJANY',label:'Szpros naklejany', img:''},
                {value:'MIEDZYSZYBOWY',label:'Szpros międzyszybowy', img:''},
                {value:'WIEDENSKI',label:'Szpros wiedeński', img:''},
            ],
        }
    },
    methods:{

    }
}
</script>