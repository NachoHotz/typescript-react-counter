import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions/types';
import style from './Home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootStateOrAny) => state.counter);

  return (
    <div className={style.container}>
      <p className={style.counter}>{counter}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}
