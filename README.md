
发布请 执行npm start命令




本地测试执行以下步骤：

1、node proxy.js 用于请求后台，跨域代理。(由于qa请求收到限制，只能请求dev)

2、gulp watch 用于监听本地文件变化，实时编译。（如果提示gulp不是本地命令，请全局安装gulp 即：npm install -g gulp）

3、打开浏览器输入localhost:8080/index.html#/，即可看到项目（无首页页面，不同页面需进入参考route.js）

4、（修改代码后）刷新浏览器即可看到变化后的代码

5、建议下载微信web开发者工具测试。

6、注意：本地测试预览也是压缩后的代码。注意语法正确，或者在gulpfile里面暂时注释掉压缩任务。