<template>
  <div class="app-root">
    <p>{{ count }}</p>
    <p><button @click="min">-</button><button @click="plus">+</button></p>
    <HelloWorld :msg="count.toString()"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'AppRoot',
  components: {
    HelloWorld,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    min() {
      this.count--;
    },
    plus() {
      this.count++;
    },
  },
};
</script>

<style lang="scss">
.app-root {
  background-color: goldenrod;
  padding: 4rem;
  p {
    text-align: center;
    font-family: sans-serif;
    font-weight: bold;
  }
}
</style>
