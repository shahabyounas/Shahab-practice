<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3">Customer Component</p>
        <ul class="list-group">
          <li class="list-group-item">Name: {{ name }}</li>
          <li class="list-group-item">Age: {{ age }}</li>
          <li class="list-group-item">Designation: {{ designation }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
defineProps({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  designation: { type: String, required: true },
});
</script>

<style></style>

<!-- 

<template>
</template>

<script>
</script>

<style>
</style> -->
