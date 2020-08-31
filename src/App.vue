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
import HelloWorld from './components/HelloWorld.vue'
import Window from './components/Window.vue'
import Sash from './components/Sash.vue'



export default {
  components: {
    Window,Sash, mainhead, mainfoot
  }
  
}
</script>

<style>

</style>
