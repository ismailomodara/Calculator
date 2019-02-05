<template>
  <div>
    <ul>
      <li
        v-for="item in navItems"
        :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  componentName: 'Sidebar',
  data() {
    return {
      navItems: [
        {
          id: 1,
          title: 'Standard',
          icon: ''
        },
        {
          id: 2,
          title: 'Scientific',
          icon: ''
        },
      ]
    }
  },
  props: {
      msg: String
  }
}
</script>


<style scoped>

</style>
