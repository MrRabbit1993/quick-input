
<script>
import DataJosn from "./mock/index.json";
export default {
  name: "app",
  data() {
    return {
      str:1,
      str1:2
    };
  },
  render(h) {
    return (
      <div>
        {/* <quick-input value={this.str1} onInput={(value)=>this.str1 = value } onChage={this.navigate}
        //   custom-options={this.filterModules}/>*/}
        <quick-input  placeholder="请输入内容检索" url='/api/v1/npm-store/getJson'
            Authorization="base64 code sha256"
            option-value="value" option-label="label" filter-name="inputQuery" value={this.str1} />
      </div>
    );
  },
  methods:{
    filterModules(filter, complete) {
        var modules = DataJosn.data;
        if (modules && modules.length) {
          // var options = modules.filter(_ => {
          //   if (!filter || filter == '*') return Boolean(_.ModuleUri);
          //   filter = filter.toLowerCase();
          //   console.log("转换",filter)
          //   if (!_.$py) _.$py = py.getPinyin(_.ModuleName, false, true);
          //   return Boolean(_.ModuleUri) &&
          //     (_.ModuleName.toLowerCase().indexOf(filter) >= 0
          //       || _.$py.filter(_ => _.indexOf(filter) >= 0).length);
          // });
          const options = modules.filter(module=>module.label.indexOf(filter)>=0);
          console.log(options)
          complete(options);
        } else {
          complete([]);
        }
      },
    navigate(e){
      console.log(e)
    }
  }
};
</script>
