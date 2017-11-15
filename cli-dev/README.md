# gt
 
前端业务代码工具库  

### 浏览器
``` html
  <script src="dist/gt.min.js"></script>
```
### vue-cli方法
- 安装
``` javascript
  npm i --save-dev gt-public-js
```
- 使用
``` javascript
  <script>
    // 完整引入
    const gt = require('gt-public-js/lib/gt.min')

    // 只引入部分方法('dist/<方法名>')
    const getMd5 = require('gt-public-js/lib/getMd5')

    export default{
      methods(){
        test(){
          console.log(getMd5(),'获取md5字符串')
        }
      }
    }
  </script>
```

