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

```js
Function.prototype.myBind = function(that, ...args) {
  const _this = this;

  function fn(...inArgs) {
    console.log(2, new.target, this instanceof fn);
    // if (new.target) { // this instanceof fn
    //   return new _this(...args, ...inArgs);
    // }
    return _this.apply(this instanceof fn ? this : that, args.concat(inArgs));
  }
  function pp() {}
  pp.prototype = this.prototype;
  fn.prototype = new pp();
  return fn;
}
```
