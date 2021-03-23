Vue.component('count-btn', {
  template:
    '<button class="count-btn" @click="click">You clicked me {{count}} times</button>',
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  methods: {
    click() {
      this.$emit('count-up');
    },
  },
});

Vue.component('banner', {
  template: `<div :class="bannerClasses"><slot/></div>`,
  props: {
    color: {
      type: String,
      default: 'blue',
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      big: true,
    };
  },
  computed: {
    bannerClasses() {
      return {
        banner: true,
        'banner--big': this.big,
        ['banner--' + this.color]: true,
        'banner--round': this.round,
      };
    },
  },
});

Vue.component('hello-you', {
  template:
    '<h2 @click="updateMessage">Hello {{someMessageData}} and {{otherMessage}}</h2>',
  props: {
    someMessage: { type: String, required: true },
    otherMessage: { type: String, default: 'others' },
  },
  data() {
    return {
      someMessageData: '',
    };
  },
  created() {
    this.someMessageData = this.someMessage;
  },
  methods: {
    updateMessage() {
      this.someMessageData = 'blabla';
    },
  },
});

const vueApp = new Vue({
  el: '#app',
  data() {
    return {
      message: 'something',
      countOne: 0,
      countTwo: 0,
      countThree: 0,
    };
  },
  methods: {
    upCount(whichCount) {
      switch (whichCount) {
        case 1:
          this.countOne++;
          break;
        case 2:
          this.countTwo++;
          break;
        case 3:
          this.countThree++;
          break;
      }
    },
  },
});
