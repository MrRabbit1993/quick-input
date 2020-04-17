import QuickInput from '../packages/input';
const Components = [
  QuickInput
]
const install = Vue => {
  if (install.installed) return;
  Components.forEach(component => {
    Vue.component(component.name, component);
  });
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};
export default {
  install,
  QuickInput
}