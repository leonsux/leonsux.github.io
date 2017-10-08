---
layout: post
title: Git学习小结
date: 2017-09-08 13:39:01
author: Leonsux
catalog: true
tags: Git
---
参照[廖雪峰的git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)做了下自己的总结，包括一些常用的命令，用于自己查阅，如果能帮到你那再好不过了，持续更新。
#### 创建版本库（repository）
```
$ mkdir home
$ cd home
$ pwd
```
创建一个名为home的文件夹
进入home
显示当前目录

```
$ git init
```
初始化版本库，将当前目录变成git可以管理的仓库，会生成一个默认隐藏的.git目录，里面的内容不要动。

#### 创建/添加/提交
在home里新建个文件，readme.md。内容随意。
```
$ git status
```
查看仓库的状态，修改文件内容，或者添加/删除文件都能看到

```
$ git add readme.md
```
将文件添加到暂存区（文件名区分大小写），但并未提交（commit）

```
$ git commit -m"提交时的备注信息"
```
提交会把暂存区的所有内容提交到仓库

#### 修改/提交日志/版本退回
```
$ git diff read.md
```
查看对文件做了哪些修改

```
$ git log
$ git log --pretty=oneline
```
查看修改日志，可以看到版本号和对应的版本备注信息，后面的 --pretty=oneline 为一行显示，便于观察

```
$ git reset --hard HEAD^
$ git reset --hard HEAD^^
$ git reset --hard 1484761464
```
依次为：退回到上一个版本，退回到上上个版本，退回到版本号为1484761464的版本
那么，我怎么知道版本号呢？

```
$ git reflog
```
查看之前所有的提交日志（包括版本号，版本备注信息），这样就可以退回到任何版本了，此外不仅可以退回到以前的版本，因为记录了每次的提交记录，所以也可以返回到最新的版本。就比如：现在是2.0版本，今天我退回到1.9版，第二天我突然觉得2.0版还挺好的，就可以用 git reflog查看2.0版的版本号，再用git reset --hard erf4864返回。

#### 撤销修改
1. 修改文件内容，并未添加到暂存区
手动把做的修改改回来，或者用下面的命令
```
$ git checkout -- readme.md
```
2. 修改文件内容，同时添加到暂存区(git add readme.md)
```
$ git reset head readme.md  //回到第一种情况（未添加到暂存区）
$ git checkout -- readme.md
```
3. 修改文件内容，添加到暂存区，提交到仓库（git commit -m"add error"）
还想啥呢，版本退回吧

#### 删除文件
手动删除
命令删除
```
$ rm readme.md
```
用 git status 可以看到文件被删除的信息
这时可以选择撤销此次删除（跟撤销修改的操作一样）：
```
$ git checkout -- readme.md
```
也可以选择确实要从版本库中删除这个文件：
```
$ git rm readme.md
$ git commit -"remove readme.md"
```
这样的话就从版本和本地磁盘上都删除掉了，但你仍然可以通过版本退回找回删除的文件，总之，只要有过提交记录，都能找回来。
#### 添加到远程仓库
现在GitHub上注册账号，然后创建一个新的仓库
在本地仓库下执行：
```
$ git romte add origin git@github.com:leonsux/gitstudy.git
```
将本地仓库内容推送到远程仓库
```
$ git push -u origin master
```
其中的-u可以把本地的master分支和远程的master分支关联起来，在以后的推送和拉取时就可以简化，直接使用：
```
$ git push origin master
```