import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions/types';
import { State } from '../redux/store';
import style from './Home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state: State) => state.root.counter);

  return (
    <div className={style.container}>
      <p className={style.counter}>{counter}</p>
      <div>
        <button onClick={() => dispatch(actions.increment())}>Increment</button>
        <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
        <button onClick={() => dispatch(actions.reset())}>Reset</button>
      </div>
    </div>
  );
}
