import QuickInput from './src/index';

/* istanbul ignore next */
QuickInput.install = Vue => {
    Vue.component(QuickInput.name, QuickInput);
};

export default QuickInput;