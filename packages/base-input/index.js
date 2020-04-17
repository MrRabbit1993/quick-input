import BaseInput from './src/index';

/* istanbul ignore next */
BaseInput.install = function (Vue) {
    Vue.component(BaseInput.name, BaseInput);
};

export default BaseInput;