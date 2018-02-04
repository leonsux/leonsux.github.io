---
layout: post
title: 在create-react-app脚手架上实现Ant Design按需加载
date: 2018-01-17
author: Leonsux
catalog: true
tags: 
  - React
  - create-react-app
  - Ant Design
---


在看antd使用的时候官方提到了**强烈推荐**使用按需加载，按需加载可以在引用组件的时候引入组件对应的样式，而我们通常只会用到一个UI组件库中的极少一部分

首先安装babel-plugin-import
`npm i babel-plugin-import -S`

然后在`.babelrc`中添加如下代码

```
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
  ]
}
```

但如果是用的create-react-app脚手架的话，初始的根目录里并没有`.babelrc`文件，那就自己新建一个，不过如果在windows系统下，在目录下右键新建命名为`.babelrc`时会报错，说必须输入文件名，很坑，那没办法，就在编辑器里新建吧

babelrc配置完之后，把项目跑起来发现并不起作用，组件样式并没有加上，？？？

这里其实错的不是我们，也不是antd，而是这个脚手架，他默认是不使用.babelrc的，可以在`node_module/react-scripts/config/webpack.config.dev.js`中看到：
![未命名1516197245.png](http://upload-images.jianshu.io/upload_images/3629578-ea17788dfe22d148.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

只要把false改成true再重新`npm  start`一下就好了

后面用的antd组件的地方直接引用就行了，不用再去引样式

`import { Button } from 'antd-moblie'`
