<script>
export default {
  name: "quick-input",
  props: {
    value: { type: [Number, String, Object] },
    text: String,
    selectable: { type: [Boolean, String], default: false },
    selectFilter: { type: String, default: "*" },
    filterName: { type: String, default: "filter" },
    scope: { type: [String, Boolean, Number, Object, Array, Function] },
    customOptions: { type: [Function, Array, Object] },
    url: { type: String },
    textUrl: { type: String },
    placeholder: { type: String },
    readonly: { type: [String, Boolean] },
    disabled: { type: [String, Boolean] },
    optionValue: { type: String, default: "value" },
    optionLabel: { type: String, default: "label" },
    suggestionDelay: { type: Number, default: 400 },
    clearable: { type: [Boolean, String], default: true },
    valueDetectOnChanged: { type: Boolean, default: false } // 是否在changed事件时检测 value == this.value
  },
  data() {
    return {
      dropdownTimer: null,
      boxWidth: this.width,
      loading: false,
      focus: false,
      hiddenValue: this.value,
      displayText: this.text,
      showSuggestions: false,
      typing: true, // 手工输入标志
      options: []
    };
  },
  created() {
    if (!this.customOptions && !this.url) {
      throw new Error("请指定 customOptions 或 url 属性.");
    }
  },
  render(h) {
    return (
      <div
        class="qib-box-container"
        title={this.displayText}
        width={this.boxWidth}
        ref="container"
        onMouseover={() => (this.focus = true)}
        onMouseout={() => (this.focus = false)}
      >demo</div>
    );
  }
};
</script>
<style lang="less" scoped>
.qib-box-container {
  display: inline-block;
}
</style>
