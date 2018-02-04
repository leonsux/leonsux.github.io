---
layout: post
title: create-react-app脚手架下配置sass的编译
date: 2017-12-20
author: Leonsux
catalog: true
tags: 
  - React
  - create-react-app
  - Ant Design
---

还是sass好用，当然在使用前还是要配置一波

安装`sass-loader, node-sass`

在`node_modules`的`react-scripts`下的`webpack.config.dev.js`中修改如下图配置
![create-react-app-sass.png](http://upload-images.jianshu.io/upload_images/3629578-5bba995e339a2dc3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

跨域的proxy配置

![proxy配置.png](http://upload-images.jianshu.io/upload_images/3629578-19ee29a777cab3e0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

嘿呀，又暴露了自己的无知，早该想到每次都去`node_modules`里找配置很麻烦，应该有更便捷的方法的

其实可以在项目目录下执行`npm run eject`，然后选择yes，这样项目目录下就会多出一个config文件夹，里面就是我们的配置信息了
[参考](http://blog.csdn.net/zhaolandelong/article/details/78468842)