<template>
  <div id="calculator">
    <div class="sidebar">
      <sidebar/>
    </div>
    <div class="content">
      <interface/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar';
import Interface from './components/interface';

export default {
  name: 'calculator',
  components: {
    Sidebar,
    Interface
  }
}
</script>

<style scoped>

</style>
