const firstVueApp = new Vue({
  el: '#app',
  data() {
    return {
      lineOne: '',
      selectedOperator: '',
      lineTwo: '',
      operators: ['+', '-', '*', '/', '√', '^'],
    };
  },
  methods: {
    numberClick(event) {
      this.lineTwo += event.target.textContent.trim();
    },
    operatorClick(operator) {
      if (!this.lineOne && !this.lineTwo) {
        return;
      }

      this.selectedOperator = operator;
      if (!this.lineOne) {
        this.lineOne = this.lineTwo;
        this.lineTwo = '';
      }
    },
    clear() {
      this.lineOne = '';
      this.lineTwo = '';
      this.selectedOperator = '';
    },
    calculate() {
      if (!this.lineOne || !this.lineTwo || !this.selectedOperator) {
        return;
      }

      let result;

      switch (this.selectedOperator) {
        case '+':
          result = parseInt(this.lineOne) + parseInt(this.lineTwo);
          break;
        case '-':
          result = this.lineOne - this.lineTwo;
          break;
        case '*':
          result = this.lineOne * this.lineTwo;
          break;
        case '/':
          result = this.lineOne / this.lineTwo;
          break;
        case '√':
          result = Math.pow(this.lineOne, 1 / this.lineTwo);
          break;
        case '^':
          result = Math.pow(this.lineOne, this.lineTwo);
          break;
      }

      this.lineOne = parseFloat(result.toFixed(4));
      this.selectedOperator = '';
      this.lineTwo = '';
    },
  },
});
