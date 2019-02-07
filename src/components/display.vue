<template>
  <div class="display">
    <div class="io-display">
      <div class="result">
        <span class="mode">DEG</span>
      </div>
      <div class="operation">
        <input type="text" name="operation" @keypress="onlyNumbers">
      </div>
    </div>
    <div class="options"></div>
  </div>
</template>

<script>
export default {
  name: 'Display',
  componentName: 'Display',
  components: {},
  data() {
      return {}
  },
  methods: {
    onlyNumbers(e) {
      if (e.which >= 58 || e.key === 32 || e.key === 13) {
        e.preventDefault();
      }
    },
  }
}
</script>git


<style scoped>

</style>
