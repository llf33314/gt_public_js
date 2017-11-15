# gt
 
前端业务代码工具库  
## 安装使用
### 浏览器:
``` html
  <script src="gt.min.js"></script>
```

### npm:
``` bash
$ npm install --save-dev 
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const gt = require('gt-public-js/dist/gt.min')
```

**推荐使用方法**  

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('dist/<方法名>')
const getMd5 = require('gt-public-js/lib/getMd5')
```

