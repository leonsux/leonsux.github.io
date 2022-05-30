const debounce = (fn, time, immediate) => {
  let timer = null;
  const _debounce = function(...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }

    if (immediate) { // 是否立即执行
      const firstCall = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, time);
      if (firstCall) {
        fn.apply(context, args);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
        clearTimeout(timer);
        timer = null;
      }, time);
    }
  }

  return _debounce;
}

const con = param => console.log(param);

const dCon = debounce(con, 1000, false);

dCon(100)
dCon(200)
// 短时间触发两次，取最后一次执行，输出 200

const dConNow = debounce(con, 1000, true);

dConNow(100)
dConNow(200)
// 短时间触发两次，取第一次执行，输出 100

