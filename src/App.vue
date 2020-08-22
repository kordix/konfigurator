<template>
  <div id="app">
    <window></window>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Window from './components/Window.vue'
import Sash from './components/Sash.vue'



export default {
  name: 'App',
  components: {
    Window,Sash
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
