import Button from './button/index.js';
import Backtop from './backtop/index.js';
import Icon from './icon/index.js';
import Breadcrumb from './breadcrumb/index.js';
import BreadcrumbItem from './breadcrumb-item/index.js';

const components = [
  Button,
  Backtop,
  Icon,
  Breadcrumb,
  BreadcrumbItem
];

const install = function(Vue) {
  components.map(component => Vue.component(component.name, component));
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1',
  install,
  Button,
  Backtop,
  Icon,
  Breadcrumb,
  BreadcrumbItem
}