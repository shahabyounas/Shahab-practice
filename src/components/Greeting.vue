<template>
  <h2>{{ this.msg }}</h2>
  <button @click="update('Good Day')" class="btn btn-success">
    update Message
  </button>
</template>

<script>
export default {
  name: 'Greeting',
  data: () => ({
    msg: 'Welcome',
  }),
  methods: {
    update: function (msg) {
      this.msg = msg;
    },
  },
};
</script>

<style></style>
