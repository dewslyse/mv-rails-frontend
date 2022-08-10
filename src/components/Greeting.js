import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from './redux/greeting';
import '../App.css';

const Greeting = () => {
  const message = useSelector((state) => state.greeting.greeting);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(getGreeting());
  }

  return (
    <div className="advice">
      <h2>{message}</h2>
      <button type="button" onClick={handleClick}>
        Get Advice
      </button>
    </div>
  );
};

export default Greeting;
