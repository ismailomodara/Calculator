<template>
  <div>
    <div class="display">
      <div class="io-display">
        <div class="result">
          <span class="mode">DEG</span>
        </div>
        <div class="operation">
          <input type="text" v-model="currentValue" name="operation" @keypress="onlyNumbers">
        </div>
      </div>
      <div class="options"></div>
    </div>
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
            :key="button.id"><button @click="methodTo(button.function, button.value)"><span>{{ button.value }}</span></button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Standard',
  componentName: 'Standard',
  data() {
    return {
      currentValue: 0,
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
      ],
      regular: [
        {
          id: 7,
          value: 7,
          function: 'append'
        },
        {
          id: 8,
          value: 8,
          function: 'append'
        },
        {
          id: 9,
          value: 9,
          function: 'append'
        },
        {
          id: 16,
          value: '/',
          function: 'append'
        },
        {
          id: 4,
          value: 4,
          function: 'append'
        },
        {
          id: 5,
          value: 5,
          function: 'append'
        },
        {
          id: 6,
          value: 6,
          function: 'append'
        },
        {
          id: 15,
          value: 'x',
          function: 'append'
        },
        {
          id: 1,
          value: 1,
          function: 'append'
        },
        {
          id: 2,
          value: 2,
          function: 'append'
        },
        {
          id: 3,
          value: 3,
          function: 'append'
        },
        {
          id: 14,
          value: '+',
          function: 'append'
        },
        {
          id: 11,
          value: '.',
          function: 'append'
        },
        {
          id: 10,
          value: '0',
          function: 'append'
        },
        {
          id: 12,
          value: '=',
          function: 'append'
        },
        {
          id: 13,
          value: '-',
          function: 'append'
        }
      ],
      functionType: ''
    }
  },
  methods: {
    onlyNumbers(e) {
      if (e.which >= 58 || e.key === 32 || e.key === 13) {
        e.preventDefault();
      }
    },
    methodTo(buttonFunction,buttonValue) {
      this.functionType = buttonFunction;
      switch (this.functionType) {
        case 'append':
          return this.showNumber(buttonValue);
        default:
          return 'Wrong';
      }
    },
    showNumber(value) {
      this.currentValue = value;
    }
  }
}
</script>

<style scoped>

</style>
