import ElInput from './src/index';

/* istanbul ignore next */
ElInput.install = function (Vue) {
    Vue.component(ElInput.name, ElInput);
};

export default ElInput;