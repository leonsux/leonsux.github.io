import React from 'react';
import ReactDOM from 'react-dom';

const useState = (() => {
  let data = [];
  let index = 0;

  let setData = current => {
    return (prop) => {
      data[current] = prop;
      index = 0; // 触发重新渲染，index 需要初始化为0
      ReactDOM.render(<App />, document.getElementById('root'));
    }
  }

  function useState(initial) {
    let val = data[index] ? data[index] : initial;
    data[index] = val;
    const set = setData(index);
    index++;
    return [val, set];
  }
  return useState;
})()



function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('leon');

  return (
    <div>
      --
      {count}
      --
      <button onClick={() => setCount(count + 1)}>btn</button>
      --
      {name}
      --
      <button onClick={() => setName(name + 1)}>btn</button>
    </div>
  );
}

export default App;
