<template>
  <div class="c-hello">
    <p>Hello {{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.c-hello {
  color: indianred;
}
</style>
