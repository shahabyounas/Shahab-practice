<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <p class="h3 display-3">{{ count }}</p>
            <button @click="incr" class="btn btn-success my-1">
              Increament
            </button>
            <button @click="decr" class="btn btn-warning mx-2">
              Decreament
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    incr: function () {
      this.count = this.count + 1;
    },
    decr: function () {
      this.count = this.count - 1;
    },
  },
};
</script>

<style></style>
