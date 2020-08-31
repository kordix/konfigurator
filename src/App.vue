<template>
<div style="background:#f8f9fa!important">

    <mainhead></mainhead>
  <div class="container" style="height:100%">
    <router-view></router-view>

  </div>
    <mainfoot></mainfoot>
</div>

</template>

<script>
import mainhead from './components/layout/Mainhead'
import mainfoot from './components/layout/Mainfoot'




export default {
  components: {
    mainhead, mainfoot
  }
  
}
</script>

<style>

</style>
