import componentOne from './components/component-one';
import componentTwo from './components/component-two';
import Vue from 'vue/dist/vue';

// Install vue
import api from 'vue-hot-reload-api';
api.install(Vue);

// Create the vue app
const el = document.querySelector('[data-app]');
const template = `<div>
    <component-one></component-one>
    <component-two></component-two>
</div>`;
const components = {
  'component-one': componentOne,
  'component-two': componentTwo
};
const vueApp = new Vue({ el, template, components });
console.log('Started', vueApp);
