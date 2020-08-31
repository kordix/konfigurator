<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <template v-for="n in steps">
          <v-stepper-step
          style="height:100px"
          color="orange"
            :key="`${n}-step`"
            :complete="e1 > n"
            :step="n"
          >
            {{headers[n][value]}}
          </v-stepper-step>

          <v-divider
            v-if="n !== steps"
            :key="n"
          ></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="n in steps"
          :key="`${n}-content`"
          :step="n"
        >
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          >
         <!--  <v-checkbox v-model="completion[headers[n].value]"></v-checkbox> -->
          </v-card>

          <v-btn color="success" class="mr-5" @click="prevStep(n)" v-if="e1!=1">Wstecz</v-btn>
          <v-btn
            color="primary"
            @click="nextStep(n)"
          >
          {{nextbtn}}
          </v-btn>

        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
export default {
    data(){
        return {
            e1: 1,
            steps: 5,
            headers: [
                {label:'System', model:'system'},
                {label:'Kolor', model:'color'},
                {label:'Szklenie', model:'filling'},
                {label:'Okucie', model:'fitting'},
                {label:'Podsumowanie', model:'summary'}

            ],
            completion:{system:false, color:false, filling:false, fitting:false, summary:false}
            
        }
    },
    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
    },
    computed:{
        nextbtn(){
            if(this.e1 == this.steps){
                return 'Akceptuj'
            } else {
                return 'Dalej'
            }
        }
    },

    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 5
        } else {
          this.e1 = n + 1
        }
      },
      prevStep(n) {
        if (n === 1) {
          this.e1 = 1
        } else {
          this.e1 = n - 1
        }
      },
    },
}
</script>