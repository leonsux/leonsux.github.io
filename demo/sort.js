const bubble = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      console.log(arr);
    }
  }
  return arr;
}

const array = [9, 2, -3, 0, 6, 5];

// bubble(array);

console.log(array);

let c = 0;

const quickSrot = arr => {
  if (arr.length <= 1) return arr;
  const mid = arr.length >> 1;
  const left = [], right = [];
  for (let index = 0; index < arr.length; index++) {
    if (index === mid) continue;
    const current = arr[index];
    if (current < arr[mid]) {
      left.push(current)
    } else {
      right.push(current);
    }
  };
  console.log('left', left, 'right', right)

  return quickSrot(left).concat(arr[mid], quickSrot(right))
}

console.log(quickSrot(array));

// 9 2 -3 0 6 5
