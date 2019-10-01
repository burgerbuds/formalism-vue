import { configure } from '@storybook/vue';
import Vue from 'vue';

import VueHighlightJS from 'vue-highlightjs';
Vue.use(VueHighlightJS);

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
