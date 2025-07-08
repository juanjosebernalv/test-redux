import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount, search } from '../../features/counter/counterSlice';

const Component1 = () => {
  const [stateComp, setStateComp] = useState(100);
  const [name, setName] = useState('');

  const count = useSelector(state => state.value);
  const results = useSelector(state => state.results);
  const textSearch = useSelector(state => state.newSearch);
  const dispatch = useDispatch();
  return (
    <div>
      Componente 1 {stateComp}
      <button onClick={() => setStateComp(stateComp + 1)}>Add</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add Global State RTK</button>
      {JSON.stringify(results)}
      <input type='text' value={name} onChange={(value) => setName(value.currentTarget.value)}></input>
      <button onClick={() => dispatch(search(name))}>search</button>
      <button disabled={textSearch.length === 0}>CONTROL</button>
      <pre>count: {count}</pre>

      <pre>{JSON.stringify(results)}</pre>
      <pre>{JSON.stringify(textSearch)}</pre>
    </div>
  );
};

export default Component1;
