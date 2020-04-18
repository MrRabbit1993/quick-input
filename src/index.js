import QuickInput from '../packages/input';
import BaseInput from "../packages/base-input"
const Components = [
  QuickInput,BaseInput
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
  QuickInput,
  BaseInput
}