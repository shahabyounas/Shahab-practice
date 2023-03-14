import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

/**
 * Import Font Awsome
 */

import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

/**
 * Import Bootstrap CSS and bundle
 */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

createApp(App).mount('#app');
