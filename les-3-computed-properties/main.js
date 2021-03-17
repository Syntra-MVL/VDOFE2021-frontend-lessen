const firstVueApp = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Hello',
      numbers: [2, 3, 5, 7, 8, 11, 12, 4, 7],
      filter: 'all',
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
    filteredNumbers() {
      switch (this.filter) {
        case 'all':
          return this.numbers;
        case 'even':
          return this.numbers.filter((n) => n % 2 === 0);
        case 'uneven':
          return this.numbers.filter((n) => n % 2);
      }
    },
  },
  methods: {
    changeFilter(filter) {
      this.filter = filter;
    },
  },
});
