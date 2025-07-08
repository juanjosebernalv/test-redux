import logo from './logo.svg';
import './App.css';
import Component1 from './app/components/Component1';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';

function App() {
  const count = useSelector(state => state.value);
  const dispatch = useDispatch();



  return (
    <div className="App">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      aqui el de CONTROL
      API: https://rickandmortyapi.com/api/character
      <Component1 />
      <Component1 />
      <Component1 />
      <Component1 />
      <Component1 />
      <Component1 />
      <Component1 />
      <Component1 />
      <Component1 />
    </div>
  );
}

export default App;
