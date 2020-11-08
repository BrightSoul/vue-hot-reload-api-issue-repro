import api from 'vue-hot-reload-api';

const componentId = 'component-two';
const componentOptions = {
  data() { return { fizz: 'buzz' }; },
  template: '<div>fizz value is: {{ fizz }}</div>' // change something in the template, then save
};

if (module.hot) {
  module.hot.accept();
  if (!api.isRecorded(componentId)) {
    api.createRecord(componentId, componentOptions);
  }
  api.rerender(componentId, componentOptions);
}

export default componentOptions;