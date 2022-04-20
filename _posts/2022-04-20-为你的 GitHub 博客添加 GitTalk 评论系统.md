---
layout: post
title: 为你的 GitHub 博客添加 GitTalk 评论系统
date: 2022-04-20
author: Leonsux
catalog: true
tags: 
  - Blog
---

> Gitalk 是一个基于 GitHub Issue 和 Preact 开发的评论插件。

先看一下最终效果，并且欢迎来体验：[https://leonsux.github.io](https://leonsux.github.io/)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/868b2c2d6b1c460bace4281758264e64~tplv-k3u1fbpfcp-watermark.image?)

## 添加授权

首先为我们的博客添加 GitHub 的登陆授权，点击头像到设置里找到新建授权 `Settings -> Developer settings -> OAuth Apps -> New OAuth`， 如下图所示
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57a563d2dc1a4ff196e32db6d2977c1d~tplv-k3u1fbpfcp-watermark.image?)


| 标题 | 说明 |
| --- | --- |
| Application name | 应用名称，可以填你的博客名 |
| Homepage URL | 应用主页地址，填博客地址 |
| Application description | 应用描述 |
| Authorization callback URL | 授权成功后的回跳地址，填博客地址 |


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/beff94b291d64614a33c11035fc55f5d~tplv-k3u1fbpfcp-watermark.image?)

创建好之后来到详情页面，点击 **Generate a new client secret** 生成一个 `Client secret`，记下 **Client ID** 和 **Client secret**。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8d27e8c64fa41c08532e918e2562d06~tplv-k3u1fbpfcp-watermark.image?)

## 接入 GitTalk

找到放置博客文章的文件，我这里是 `/_layouts/post.html`，添加如下代码：

| 参数 | 说明 |
| --- | --- |
| clientID | 上面申请的  Client ID |
| clientSecret | 上面申请 Client secret |
| repo | 仓库名称 |
| owner | 仓库所有者（你自己，填 GitHub 名） |
| repo | 仓库名称 |
| admin | 管理员（你自己，也可以添加其他人，填 GitHub 名），管理员才能初始化评论（后面会说到） |
| id | 可以理解为文章id，要保证唯一性，且长度要小于50，可以用 `decodeURI(location.pathname).slice(0, 49)`， |


``` html
<!-- Gitalk 评论 start  -->

    <!-- Link Gitalk 的支持文件  -->
    <link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
    <script src="https://unpkg.com/gitalk@latest/dist/gitalk.min.js"></script> 
    <div id="gitalk-container"></div>
    <script type="text/javascript">
        var gitalk = new Gitalk({
            // gitalk的主要参数
            clientID: `xxx`, // 替换成你自己的 clientID
            clientSecret: `xxxx`, // 替换成你自己的 clientSecret
            repo: `leonsux.github.io`, // 替换成你自己的仓库
            owner: 'leonsux', // 你的 GitHub 名
            admin: ['leonsux'], // 你的 GitHub 名
            id: decodeURI(location.pathname).slice(0, 49),
        });
        gitalk.render('gitalk-container');
    </script> 
<!-- Gitalk end -->
```

保存提交之后我们去找一篇文章试下，拉到底部会发现提示说这篇文章还没有关联 `Issues`，点击下方按钮授权并关联即可。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e81dd0cc19c463eb0d6b9d82098df84~tplv-k3u1fbpfcp-watermark.image?)

这样就成功啦，快来留言讨论吧，[https://leonsux.github.io](https://leonsux.github.io/)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e4d2d44145d48c4aff3f72afe4451a0~tplv-k3u1fbpfcp-watermark.image?)
