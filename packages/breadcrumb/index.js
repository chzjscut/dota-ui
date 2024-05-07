import Breadcrumb from './src/breadcrumb.vue';

/* istanbul ignore next */
Breadcrumb.install = function(Vue) {
  Vue.component(Breadcrumb.name, Breadcrumb);
}

export default Breadcrumb;