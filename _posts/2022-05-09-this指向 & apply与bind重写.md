---
layout: post
title: this指向 & apply与bind重写
date: 2022-05-09
author: Leonsux
catalog: true
tags: 
  - this指向
  - apply、bind
---

## 函数中 this 的指向 & 箭头函数中 this 的指向

> 如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的this指向该对象。如果函数独立调用，那么该函数内部的this，则指向undefined。但是在非严格模式中，当this指向undefined时，它会被自动指向全局对象。

> 箭头函数中的 this，跟定义该函数时所在的执行上下文中的 this 指向一致。

```js
'use strict';
var a = 123;
function fn() {
  console.log(this.a); // 严格模式下 this 为undefined；非严格模式为 全局对象
}

window.fn(); // 123 , fn 被 window调用，this 为 window

fn(); // 报错，this为 undefined，

var obj = {
  speak: function() {
    console.log('speak', this)
  },
  say: () => {
    console.log('say', this)
  }
}
obj.speak(); // 函数由 obj 调用，故 this 指向 obj
obj.say(); // say 函数 所在的执行上下文为全局执行上下文，故 this 指向全局对象（浏览器中为 window ）
```

## 手动实现 `apply`

```js
Function.prototype.myApply = function(that, param) {
  that.fn = this;
  if (param === undefined || param === null) {
    return that.fn();
  }

  if (!Array.isArray(param)) {
    throw Error('apply 第二个参数必须为数组！')
  }
  const res = that.fn(...param);
  delete that.fn;
  return res;
}
```

## 手动实现 `bind`

```js
Function.prototype.myBind = function(that, ...args) {
  const _this = this;

  function fn(...inArgs) {
    console.log(2, new.target, this instanceof fn);
    // 方法 1
    // if (new.target) { // this instanceof fn
    //   return new _this(...args, ...inArgs);
    // }

    // 方法 2
    return _this.apply(this instanceof fn ? this : that, args.concat(inArgs));
  }
  function pp() {}
  pp.prototype = this.prototype;
  fn.prototype = new pp();
  return fn;
}
```

## 参考

[https://www.jianshu.com/p/d647aa6d1ae6](https://www.jianshu.com/p/d647aa6d1ae6)
