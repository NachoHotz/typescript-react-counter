import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions/types';
import style from './Home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);

  return (
    <div className={style.container}>
      <h1 className={style.counter}>{counter}</h1>
      <div className={style.btn_container}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}
