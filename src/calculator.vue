<template>
  <div id="calculator">
    <div class="sidebar">
      <sidebar/>
    </div>
    <div class="content">
      <display/>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <div class="history"></div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar';
import Display from './components/display';

export default {
  name: 'calculator',
  components: {
    Sidebar,
    Display
  }
}
</script>

<style scoped>

</style>
