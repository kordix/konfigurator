<template>
  <div style="background:#f8f9fa!important">
      <mainhead></mainhead>
    <div class="container" style="height:100%">
      <router-view></router-view>
      <startinfo></startinfo>
    </div>
      <mainfoot></mainfoot>
  </div>

</template>

<script>
import mainhead from './components/layout/Mainhead'
import mainfoot from './components/layout/Mainfoot'
import startinfo from './components/elements/StartInfo'




export default {
  components: {
    mainhead, mainfoot, startinfo
  },
  data(){
    return{}
  }
  
}
</script>

<style>

</style>
