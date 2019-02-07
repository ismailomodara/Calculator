<template>
  <div class="standard">
    <div class="scientific">
      <ul>
        <li
          v-for="button in scientific"
          :key="button.id"><button><span v-html="button.value">{{ button.value }}</span></button></li>
      </ul>
    </div>
    <div class="regular">
      <ul>
        <li
          v-for="button in regular"
          :key="button.id"><button><span>{{ button.value }}</span></button></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Standard',
  componentName: 'Standard',
  data() {
    return {
      regular: [
        {
          id: 7,
          value: 7
        },
        {
          id: 8,
          value: 8
        },
        {
          id: 9,
          value: 9
        },
        {
          id: 16,
          value: '/'
        },
        {
          id: 4,
          value: 4
        },
        {
          id: 5,
          value: 5
        },
        {
          id: 6,
          value: 6
        },
        {
          id: 15,
          value: 'x'
        },
        {
          id: 1,
          value: 1
        },
        {
          id: 2,
          value: 2
        },
        {
          id: 3,
          value: 3
        },
        {
          id: 14,
          value: '+'
        },
        {
          id: 11,
          value: '.'
        },
        {
          id: 10,
          value: '0'
        },
        {
          id: 12,
          value: '='
        },
        {
          id: 13,
          value: '-'
        }
      ],
      scientific: [
        {
          id: 1,
          value: 'INV'
        },
        {
          id: 2,
          value: 'RAD'
        },
        {
          id: 3,
          value: '%'
        },
        {
          id: 4,
          value: 'x<sup>2</sup>'
        },
        {
          id: 5,
          value: 'sin'
        },
        {
          id: 6,
          value: 'cos'
        },
        {
          id: 7,
          value: 'tan'
        },
        {
          id: 8,
          value: '!'
        },
        {
          id: 9,
          value: 'ln'
        },
        {
          id: 10,
          value: 'log'
        },
        {
          id: 11,
          value: 'π'
        },
        {
          id: 12,
          value: '√'
        },
        {
          id: 13,
          value: 'e'
        },
        {
          id: 14,
          value: '('
        },
        {
          id: 15,
          value: ')'
        },
        {
          id: 16,
          value: '^'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
