<template>
  <pre>{{ this.user }} </pre>
  <div class="row">
    <div class="col">
      <table class="table table-hover text-center table-striped">
        <thead class="bg-success text-white">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Passowrd</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.name">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <h2>Register</h2>
  <Loader />
  <div class="container">
    <div>
      <p v-if="isRegistered" class="h4">You are already registerd user</p>
    </div>
    <div class="row">
      <div class="col md-3">
        <div class="card shadow">
          <div class="card-header bg-success text-white">
            <p class="h2">Register</p>
          </div>

          <div class="card-body bg-light">
            <form @submit.prevent="register(user)">
              <div class="mb-2">
                <input
                  type="text"
                  v-model="user.name"
                  class="form-control"
                  placeholder="Name"
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  v-model="user.email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="mb-2">
                <input
                  type="submit"
                  class="btn btn-success"
                  value="Register"
                  v-if="!isRegistered"
                />
                <input
                  type="button"
                  class="btn btn-danger mx-2"
                  value="UnRegister"
                  v-if="isRegistered"
                  @click="unsub"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from '../services/UserService';
import Loader from './Loader.vue';
import axios from 'axios';
export default {
  name: 'Register',
  data: () => ({
    isRegistered: false,
    isLoading: false,
    errorMessage: '',
    user: {
      name: '',
      email: '',
      password: '',
    },
    users: [],
  }),

  methods: {
    register: function (data) {
      this.isRegistered = true;
      console.log(JSON.parse(JSON.stringify(data)));
      this.users = [...this.users, JSON.parse(JSON.stringify(data))];
    },
    unsub: function () {
      this.isRegistered = false;
    },
  },
  created: async function () {
    try {
      this.isLoading = true;
      let resp = await UserService.getAllUsers();
      this.users = resp.data;
      this.isLoading = false;
    } catch (err) {
      this.isLoading = false;
      this.errorMessage = err;
      console.log('error', err);
    }
  },
};
</script>

<style></style>
