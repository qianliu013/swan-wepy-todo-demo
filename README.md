# WePY 百度小程序 Todo Demo

一个简易的待办事项 Demo

![页面](imgs/swan-demo.gif)

## 依赖 && 运行

```shell
npm i -g wepy-cli@1.7.3-alpha5
npm i # 所依赖的包版本参考 package.json
wepy build -o baidu -w # -w 表示监听文件修改
```

## 编译为微信小程序

### API 调整

百度小程序与微信的一些 API 是不同的，比如说 getUserInfo

swan.getUserInfo 必须在登录态下才能获取到；因此需要先 checkSession 然后获取，细节可参考：[百度智能小程序文档-登录](https://smartprogram.baidu.com/docs/develop/api/open_log/)，[微信小程序文档-登录信息](https://developers.weixin.qq.com/miniprogram/dev/api/wx.getUserInfo.html)

此外，百度小程序使用测试 appid 无法获取用户头像

### 语法

- 循环渲染列表
  - wepy 目前 repeat 编译会多一个 `:`，有问题，可以用 block 循环语句代替
  - 不同平台的 block 语句语法不同，微信 wx:for，百度 s-for
- wepy 没有提供 if 判断，因此需要将百度小程序语法的 s-if, s-else 改为 wx:if, wx:else

### 其他细节

- icon 的样式与默认 type 两个平台不同，可能需要调整
- 微信开发者工具需要关闭 ES6 转 ES5
- 一些样式调整
