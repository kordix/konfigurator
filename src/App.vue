<template>
<div style="background:#f8f9fa!important">

    <mainhead></mainhead>
  <div class="container" style="height:100%">
    <router-view></router-view>
    <features></features>

  </div>
    <mainfoot></mainfoot>
</div>

</template>

<script>
import mainhead from './components/layout/Mainhead'
import mainfoot from './components/layout/Mainfoot'
import features from './components/elements/Features'




export default {
  components: {
    mainhead, mainfoot, features
  },
  data(){
    return{}
  }
  
}
</script>

<style>

</style>
