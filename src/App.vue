<template>
  <div id="app">
    <window2></window2>
<p><b>To do:</b></p>
    <ul>
      <li>Trzyskrzydłowe</li>
      <li>Cena z macierzy</li>


    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Window from './components/Window.vue'

import Window2 from './components/Window2.vue'
import Sash from './components/Sash.vue'



export default {
  name: 'App',
  components: {
    Window2,Sash,Window
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
