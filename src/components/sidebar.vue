<template>
  <div>
    <ul>
      <li
        v-for="item in navItems"
        :key="item.id"
        @click="activeNav = item.id">
        <router-link
          :to="item.path"
          :class="{active : activeNav === item.id}">
          <img :src="`/icons/${item.title.toLowerCase()}.svg`" :alt="item.title">
          <span>{{ item.title }}</span>
        </router-link>
      </li>
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
          path: '/standard'
        },
        {
          id: 2,
          title: 'Programmer',
          path: '/programmer'
        },
        {
          id: 3,
          title: 'Volume',
          path: '/volume'
        },
        {
          id: 4,
          title: 'Length',
          path: '/length'
        },
        {
          id: 5,
          title: 'Mass',
          path: '/mass'
        },
        {
          id: 6,
          title: 'Temperature',
          path: '/temperature'
        },
        {
          id: 7,
          title: 'Currency',
          path: '/currency'
        },
      ],
      activeNav: 1
    }
  },
}
</script>


<style scoped>

</style>
