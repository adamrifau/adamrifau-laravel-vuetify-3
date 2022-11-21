import { createApp } from "vue";

import './bootstrap';
// window.Vue = require('vue').default;
// Vue.config.productionTip = true


import App from './layouts/App.vue';
import router from './router/index';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(router).use(vuetify).mount("#app");
// const app = new Vue({
//     router,vuetify,
//     el: '#app',
//     render: h => h(App),
//     components:{app},
    
// });