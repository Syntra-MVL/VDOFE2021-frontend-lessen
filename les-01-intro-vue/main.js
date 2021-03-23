const firstVueApp = new Vue({
  el: '#app',
  data() {
    return {
      clickCount: 0,
      isFriendly: true,
      title: 'Joepie!',
      friendlyMessage: 'Hello World',
      unfriendlyMessage: 'Not Hello World',
      foodItems: ['boterhammen', 'koekjes', 'sla', 'tomaat'],
    };
  },
  methods: {
    increaseClickCount() {
      this.clickCount++;
    },
  },
});
