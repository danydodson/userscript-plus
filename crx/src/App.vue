<template>
  <div id="app">
    <MainTable></MainTable>
  </div>
</template>

<script>
import MainTable from './components/Table.vue'
export default {
  components: { MainTable },
  mounted: function () {

  }
}
</script>

<style>
body {
  width: 800px;
  height: 510px;
  overflow-x: hidden;
}

#app {
  position: fixed;
  width: 100%;
}
</style>