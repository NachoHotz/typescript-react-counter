import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/store';
import * as actions from '../redux/actions/types';
import style from './Home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state: State) => state.counter);

  return (
    <div className={style.container}>
      <p className={style.counter}>{counter}</p>
      <div>
        <button onClick={() => dispatch(actions.increment())}>Increment</button>
        <button onClick={() => dispatch(actions.reset())}>Reset</button>
        <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
      </div>
    </div>
  );
}
