import './assets/main.css'
import "../src/style.css"
import {datafirebase } from './database/database.js'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import {Drawer,Button,message,List,Menu, } from 'ant-design-vue';

import 'ant-design-vue/dist/reset.css';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fab,far,fas)
 
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(bootstrap);
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.use(router);
app.use(vuetify);
app.use(datafirebase);
app.mount('#app');

app.config.globalProperties.$message = message;
