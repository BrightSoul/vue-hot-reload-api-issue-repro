import api from 'vue-hot-reload-api';

const componentId = 'component-one';
const componentOptions = {
  data() { return { foo: 'bar' }; },
  template: '<div>foo value is: {{ foo }}</div>' // change something in the template, then save
};

if (module.hot) {
  module.hot.accept();
  if (!api.isRecorded(componentId)) {
    api.createRecord(componentId, componentOptions);
  }
  api.rerender(componentId, componentOptions);
}

export default componentOptions;