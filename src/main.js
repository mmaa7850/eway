import { createApp } from 'vue';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import App from './App.vue';
import router from './router';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

const app = createApp(App);

app.use(router);

app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
