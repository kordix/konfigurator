<template>
<div class="container" style="height:100%">
  <mainhead></mainhead>
  <router-view></router-view>
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
  name: 'App',
  components: {
    Window,Sash, mainhead, mainfoot
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
