<template>
  <div class="container mt-3">
    <div class="row">
      <div class="h2">Employee</div>
      <ul class="list-group">
        <li class="list-item-group">Name: {{ this.employee.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Employee',
  data: () => {
    employee : {
       name: 'Shahab',
       age: 45,
       designation: 'Software Developer'
    }
  },
};
</script>

<style></style>
