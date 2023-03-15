import axios from 'axios';
export class UserService {
  static users = [];

  static getAllUsers() {
    const dataUrl = 'https://jsonplaceholder.typicode.com/users';
    const data = axios.get(dataUrl);
    console.log('bad request');
    console.log(data);
    return data;
  }
}
