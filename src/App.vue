<script setup>
import Customer from './components/Customer.vue';
import Employee from './components/Employee.vue';
import Counter from './components/Counter.vue';
import Greeting from './components/Greeting.vue';
</script>

<template>
  <div class="container">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h2 text-success fw-bold">App Component three</p>
        </div>
      </div>
    </div>
    <div>
      <Customer name="Shahab" age="45" designation="Huddersfield UK" />
      <Employee />
      <Counter />

      <div class="mt-3">
        <Greeting />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
