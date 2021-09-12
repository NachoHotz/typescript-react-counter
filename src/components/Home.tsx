import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/types';
import style from './Home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const counter: number = useSelector((state: RootStateOrAny) => state.counter);

  const { increment, decrement, reset } = bindActionCreators(
    actionCreators,
    dispatch,
  );

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
