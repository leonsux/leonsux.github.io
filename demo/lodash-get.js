const get = (obj, path, defaultVal) => {
  let newPath = [];
  if (Array.isArray(path)) {
    newPath = path;
  } else {
    newPath = path.replaceAll('[', '.').replaceAll(']', '').split('.');
  }
  const res = newPath.reduce((pre, cur) => {
    return (pre || {})[cur];
  }, obj);
  return res || defaultVal;
}

const obj = {
  a: [{
    a1: 1,
  }],
  b: 2,
}
const res = get(obj, 'a[0].a1', 'default');

console.log(res);
