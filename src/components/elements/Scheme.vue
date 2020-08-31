<template>
  <div>
        <window v-if="conf == '1S'"></window>
        <window2 v-if="conf == '2S'"></window2>

  </div>
</template>

<script>
import window from "../window/Window";
import window2 from "../window/Window2";


// import oscieznica from '@/components/Oscieznicakonva.vue';
// import skrzydlo from '@/components/Skrzydlo.vue';

export default {
  components:{window,window2},
  data() {
    return {
      // grubosc:20,
      // gruboscback:10,
/*       height: 600,
      width: 500,
      back: false, */
      extraheight: 0
    };
  },
  computed:{
    conf(){
      return this.$root.form.conf.value
    }
  },
  watch: {

  },
  methods: {

  },
  created() {
    
  },
  mounted() {

    // this.fadeIn();
  },

};
</script>

<style lang="css" scoped>
</style>
