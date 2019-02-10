<template>
  <div>
    <div class="display">
      <div class="io-display">
        <div class="result">
          <span class="mode">DEG</span>
          <span class="calcResult" v-if="calcResult"> {{ currentValue }}</span>
        </div>
        <div class="operation">
          <input
            type="text"
            v-model="displayInput"
            name="operation"
            disabled
            @keypress="onlyNumbers">
        </div>
      </div>
      <div class="options"></div>
    </div>
    <div class="standard">
      <div class="scientific">
        <ul>
          <li
            v-for="button in scientific"
            :key="button.id"><button @click="methodTo(button.function, button.value)"><span v-html="button.value">{{ button.value }}</span></button></li>
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
      displayInput: '',
      previousValue: null,
      currentValue: '',
      operator: null,
      operatorClicked: false,
      calcResult: false,
      calcMode: 'deg',
      scientific: [
        {
          id: 1,
          value: 'Radian',
          function: 'mode'
        },
        {
          id: 2,
          value: 'x<sup>2</sup>',
          function: 'square'
        },
        {
          id: 3,
          value: 'x<sup>3</sup>',
          function: 'cube'
        },
        {
          id: 4,
          value: 'x<sup>y</sup>',
          function: 'xToYPower'
        },
        {
          id: 5,
          value: '10<sup>x</sup>',
          function: 'decimalPower'
        },
        {
          id: 6,
          value: 'e<sup>x</sup>'
        },
        {
          id: 7,
          value: 'INV',
          function: 'inverse'
        },
        {
          id: 8,
          value: '<sup>2</sup>√x',
          function: 'square-root'
        },
        {
          id: 9,
          value: '<sup>3</sup>√x',
          function: 'cube-root'
        },
        {
          id: 10,
          value: '<sup>y</sup>√x'
        },
        {
          id: 11,
          value: 'x<sup>y</sup>'
        },
        {
          id: 12,
          value: 'x!'
        },
        {
          id: 13,
          value: 'ln'
        },
        {
          id: 14,
          value: 'log<sub>10</sub>'
        },
        {
          id: 15,
          value: 'e'
        },
        {
          id: 16,
          value: '('
        },
        {
          id: 17,
          value: ')'
        },
        {
          id: 18,
          value: 'sin'
        },
        {
          id: 19,
          value: 'cos'
        },
        {
          id: 20,
          value: 'tan'
        },
        {
          id: 21,
          value: 'sinh'
        },
        {
          id: 22,
          value: 'cosh'
        },
        {
          id: 23,
          value: 'tanh'
        },
        {
          id: 24,
          value: 'sin<sup>-1</sup>'
        },
        {
          id: 25,
          value: 'cos<sup>-1</sup>'
        },
        {
          id: 26,
          value: 'tan<sup>-1</sup>'
        },
        {
          id: 27,
          value: 'sinh<sup>-1</sup>'
        },
        {
          id: 28,
          value: 'cosh<sup>-1</sup>'
        },
        {
          id: 29,
          value: 'tanh<sup>-1</sup>'
        },
      ],
      regular: [
        {
          id: 19,
          value: 'C',
          function: 'reset'
        },
        {
          id: 18,
          value: '+/-',
          function: 'sign'
        },
        {
          id: 17,
          value: '%',
          function: 'percent'
        },
        {
          id: 16,
          value: '/',
          function: 'divide'
        },
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
          id: 15,
          value: 'x',
          function: 'multiply'
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
          id: 14,
          value: '+',
          function: 'add'
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
          id: 13,
          value: '-',
          function: 'subtract'
        },
        {
          id: 10,
          value: '0',
          function: 'append'
        },
        {
          id: 11,
          value: '.',
          function: 'decimal'
        },
        {
          id: 12,
          value: '=',
          function: 'equals'
        },
      ],
      functionType: ''
    }
  },
  computed:  {},
  methods: {
    onlyNumbers(e) {
      if (e.shiftKey || e.which >= 58 || e.key === 32 || e.key === 13) {
        e.preventDefault();
      }
    },
    methodTo(buttonFunction,buttonValue) {
      this.functionType = buttonFunction;
      switch (this.functionType) {
        case 'reset':
          return this.reset();
        case 'sign':
          return this.sign();
        case 'percent':
          return this.calcPercent();
        case 'divide':
          return this.divide(buttonValue);
        case 'multiply':
          return this.multiply(buttonValue);
        case 'add':
          return this.add(buttonValue);
        case 'subtract':
          return this.subtract(buttonValue);
        case 'equals':
          return this.equals();
        case 'append':
          return this.appendNumber(buttonValue);
        case 'decimal':
          return this.decimal();
        case 'mode':
          return this.mode();
        case 'square':
          return this.squareValue();
        case 'cube':
          return this.cubeValue();
        case 'xToYPower':
          return this.xToYPower();
        case 'decimalPower':
          return this.decimalPower();
        case 'inverse':
          return this.inverse();
        case 'square-root':
          return this.squareRoot();
        case 'cube-root':
          return this.cubeRoot();
        default:
          return this.currentValue = '';
      }
    },

    reset() {
      this.currentValue = '';
      this.displayInput = '';
    },

    sign() {
      this.currentValue = this.currentValue.charAt(0) === '-' ? this.currentValue.slice(1) : `-${this.currentValue}`;
      this.displayInput = this.displayInput.charAt(0) === '-' ? this.displayInput.slice(1) : `-${this.displayInput}`;
    },

    calcPercent() {
      this.currentValue = `${parseFloat(this.currentValue) / 100}`;
      this.calcResult = true;
    },

    setPrevious() {
      this.operatorClicked = true;
      if (this.previousValue !== null) {
        this.currentValue = `${this.operator(parseFloat(this.previousValue), parseFloat(this.currentValue))}`;
      }
      this.previousValue = this.currentValue;
    },

    divide(value) {
      this.displayInput = `${this.displayInput}${value}`;
      this.operator = (a,b) => a / b;
      this.setPrevious();
    },

    multiply(value) {
      this.displayInput = `${this.displayInput}${value}`;
      this.operator = (a,b) => a * b;
      this.setPrevious();
    },

    add(value) {
      this.displayInput = `${this.displayInput}${value}`;
      this.operator = (a,b) => a + b;
      this.setPrevious();
    },

    subtract(value) {
      this.displayInput = `${this.displayInput}${value}`;
      this.operator = (a,b) => a - b;
      this.setPrevious();
    },

    equals() {
      this.currentValue = `${this.operator(parseFloat(this.previousValue), parseFloat(this.currentValue))}`;
      this.previousValue = null;
      this.displayInput = this.currentValue;
      this.calcResult = true;
    },

    appendNumber(value) {
      if (this.operatorClicked) {
        this.currentValue = '';
        this.operatorClicked = false;
      }
      this.displayInput = `${this.displayInput}${value}`;
      this.currentValue = `${this.currentValue}${value}`;
    },

    decimal() {
      if (this.currentValue.indexOf('.') === -1) {
        this.displayInput = `${this.displayInput}.`;
        this.currentValue = `${this.currentValue}.`;
      }
    },

    mode() {
      if (this.scientific[0].value === 'Radian') {
        document.querySelector('.mode').innerHTML = 'RAD';
        this.scientific[0].value = 'Degree';
        this.calcMode = 'rad';
      } else {
        document.querySelector('.mode').innerHTML = 'DEG';
        this.scientific[0].value = 'Radian';
        this.calcMode = 'deg';
      }
    },

    squareValue() {
      this.currentValue = `${Math.pow(parseFloat(this.currentValue),2)}`;
      this.calcResult = true;
    },

    cubeValue() {
      this.currentValue = `${Math.pow(parseFloat(this.currentValue),3)}`;
      this.calcResult = true;
    },

    xToYPower() {
      this.displayInput = `${this.displayInput}^`;
      this.operator = (a,b) => Math.pow(a,b);
      this.setPrevious();
    },

    decimalPower() {
      this.currentValue = `${Math.pow(10,parseFloat(this.currentValue))}`;
      this.calcResult = true;
    },

    inverse() {
      this.currentValue = `${1 / parseFloat(this.currentValue)}`;
      this.calcResult = true;
    },

    squareRoot() {
      this.currentValue = `${Math.sqrt(parseFloat(this.currentValue))}`;
      this.calcResult = true;
    },

    cubeRoot() {
      this.currentValue = `${Math.cbrt(parseFloat(this.currentValue))}`;
      this.calcResult = true;
    }
  }
}
</script>

<style scoped>

</style>
