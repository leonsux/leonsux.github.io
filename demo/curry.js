const add = (a, b, c, d) => a + b + c + d;

const curry = fn => {
  // 如果就一个参数或者没有参数，直接返回原函数
  if (fn.length <= 1) return fn;

  const rfn = (...arg1) => {
    if (fn.length === arg1.length) { // 凑齐所有需要的参数，可以调用原函数，递归也即结束
      return fn(...arg1);
    }
    return (...arg2) => { // 参数没凑够，还需要返回一个函数，该函数的参数加上上一个函数的参数，继续去判断参数有没有凑齐
      return rfn(...arg1, ...arg2);
    }
  }

  return rfn; // 最终是要返回一个新函数
}

const curryAdd = curry(add);

const res = curryAdd(1, 2)(3)(4);

console.log(res);
