---
layout: post
title: React 中 setState 异步 or 同步 ？
date: 2022-06-9
author: Leonsux
catalog: true
tags: 
  - React
---

根据日常开发中的表现，我们可能理解 `setState` 是异步的，因为当执行 `setState` 更新数据后，直接打印会发现数据并没有更新。然而这里表现出的 “异步” 并非真正的异步。

以下直接引用现有结论，原文链接贴在最后。

> 在React的setState函数实现中，会根据一个变量isBatchingUpdates判断是直接更新this.state还是放到队列中回头再说，而isBatchingUpdates默认是false，也就表示setState会同步更新this.state，但是，有一个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true，而当React在调用事件处理函数之前就会调用这个batchedUpdates，造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state

> setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。

> **只要你进入了 react 的调度流程，那就是异步的。只要你没有进入 react 的调度流程，那就是同步的。** 什么东西不会进入 react 的调度流程？ setTimeout setInterval ，直接在 DOM 上绑定原生事件等。这些都不会走 React 的调度流程，你在这种情况下调用 setState ，那这次 setState 就是同步的。 否则就是异步的。setState 被调用后最终会走到 scheduleUpdateOnFiber 这个函数里面来。

> 而 setState 同步执行的情况下， DOM 也会被同步更新，也就意味着如果你多次 setState ，会导致多次更新，这是毫无意义并且浪费性能的。

```js
constructor(props) {
    super(props);
    this.state = {
      data: 'data'
    }
  }

componentDidMount() {
  this.setState({
    data: 'did mount state'
  })

  console.log("did mount state ", this.state.data); // data

  setTimeout(() => {
    this.setState({
      data: 'setTimeout'
    })

    console.log("setTimeout ", this.state.data); // setTimeout
  })
}
```

`useState` 的 `setState` 也是同理，但他不会去进行合并。


### 参考

[https://zhuanlan.zhihu.com/p/350332132](https://zhuanlan.zhihu.com/p/350332132)

[https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/17](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/17)
