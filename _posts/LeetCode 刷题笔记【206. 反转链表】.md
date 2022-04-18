---
layout: post
title: LeetCode 刷题笔记【206. 反转链表】
date: 2022-04-18
author: Leonsux
catalog: true
tags: 
  - 算法
  - 链表
---

## 题目

https://leetcode-cn.com/problems/reverse-linked-list

> 给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

### 示例


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71d83b5d8bd74c86a5fa2af000175a7a~tplv-k3u1fbpfcp-watermark.image?)

```
输入： head = [1,2,3,4,5]
输出： [5,4,3,2,1]
```

## 非递归解法

#### 思路

首先观察示例特点

before：
`1 -> 2 -> 3 -> 4 -> 5 -> null`

after：
`null <- 1 <- 2 <- 3 <- 4 <- 5`

看反转后的结果，整个链表最左边的元素为原初始节点（1）的 next，故设置为 null，
此后遍历链表，将当前节点的 next 设置为 上一个节点 pre，而后将 pre 更新为当前节点 current

```js
var reverseList = function(head) {
  var current = head; // 当前节点
  var pre = null; // 前一个节点

  while(current) {
    var next = current.next;
    current.next = pre;
    pre = current;

    current = next;
  }
  return pre;
};
```

## 递归写法

> 递归的主要有三个要素
> 1. 单次处理逻辑
> 2. 循环调用
> 3. 终止条件

before：
`1 -> 2 -> 3 -> 4 -> 5 -> null`

after：
`null <- 1 <- 2 <- 3 <- 4 <- 5`

### 1. 单次处理逻辑 
先看第一次的处理，我们要把 2 的 next 设置为 1，同时把 1 的 next 设置为 null；

最终返回的 head.next 也就是 2，即：2 -> 1 -> null。

```js
var reverseList = function(head) {
  head.next.next = head;
  head.next = null;
  return head.next;
};
```

### 2. 循环调用

处理完 1 ，接下来就是处理 2，所以很明显递归调用的参数要是 2，即：`reverseList(head.next)`

```js
var reverseList = function(head) {
  var newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
```

一个关键的问题是 `reverseList(head.next)` 应该加在代码的哪一行。
如果加在 `head.next.next = head; head.next = null;` 的后面，那我们传入的参数是改变后的，而我们要传入改变前的节点，所以放到最前面。

另一个关键的点是返回值，由之前的 `reutrn head.next` 变成了 `return newHead;（newHead = reverseList(head.next)）`。

### 3. 终止条件

因为我们最终要的结果是反转后的链表，即需要返回原链表的最后一个非空节点，所以返回值一定是递归方法返回的最后一个值。

如果 `head` 为空或者其 `next` 为空，说明已经遍历到最后一个节点，直接返回，他，就是新链表的头节点。

```js
var reverseList = function(head) {
  if (!head && !head.next) {
    return head;
  }
  var newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
```

## 结语

学习了官方题解中介绍的两种方法，A过之后按照自己的话整理一遍解题思路，补充了点细节，相对来说更好理解一些。
