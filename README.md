# quick-input

## Install
```shell
npm install quick-input
```

## Quick Start
``` javascript
import Vue from 'vue'
import QuickInput from 'quick-input'

Vue.use(QuickInput);

##

| 属性名称   |      说明      | 类型 | 默认值|
|----------|:-------------:|------:|
| value |  隐藏的值 | Number, String, Object | |
| text |  显示文本内容 |  String| |
| custom-options |  自定义选项清单提供，可为对象数组或function回调,回调函数原形function(filter: string,  complete: function (options));
          @filter   为过滤字符串
          @complete 为自定义options参数回传函数 |  Function| |
| url |  用于远程请求获取options数据的地址，控件会在输入变化后，向该地址post以下数据 {filter: "过滤串"} | String | |
| text-url |  若指定该值，控件会在加载时请求此地址并读取 data 为text属性值并显示 | String | |
| placeholder |  占位提示内容 | String | 请输入|
| readonly |  只读 | Boolean | false|
| disabled |  禁用 | Boolean | false|
| option-value |  指定 options 数组中，用于设置值的属性名 | String |value |
| option-label |  指定 options 数组中，用于设置文本的属性名 | String | label|
| suggestion-delay |  弹出建议内容项的延迟毫秒数 | Number | 249|
| filter-name |  模糊输入的文字，向后台回传时的参数名 | String | filter|
| scope|  范围上下文值，会在 input 事件的第二个参数, change 事件的第三个参数中接收到此值 |  | |

## Methods
```js
change   控件的值已变化，函数原型：  
function(val: string,  option: object, scope: any);
@val     为变化后的值
@option  触发该值的数据项
@scope   控件属性 scope 指定的值，用于进行参数回传等处理
```


