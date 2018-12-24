import Vue from 'vue'
import App from './App.vue'
import VueHoodie from 'vue-hoodie'

import Hoodie from '@hoodie/client'
import PouchDB from 'pouchdb';

Vue.use(VueHoodie);

Vue.config.productionTip = false

const hoodie = new Hoodie({
  PouchDB,
  url: 'http://localhost:8080'
});


hoodie.store.add({
    type: 'todo-item',
    content: 'Try out hoodie!',
    done: false
})

new Vue({
  render: h => h(App),
  hoodie,
}).$mount('#app')