<script setup>
import Customer from './components/Customer.vue';
import Employee from './components/Employee.vue';
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
    </div>
  </div>
</template>

<style scoped></style>
