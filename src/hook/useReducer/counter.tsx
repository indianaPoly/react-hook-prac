// 작동을 안하는데..?
import { useReducer } from 'react';

enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

// An interface for our actions
interface CountAction {
  type: CountActionKind;
  payload: number;
}

// An interface for our state
interface CountState {
  count: number;
}

// Our reducer function that uses a switch statement to handle our actions
function counterReducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        value: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        value: state.count - payload,
      };
    default:
      return state;
  }
}

// An example of using the `useReducer` hooks with our reducer function and an initial state
const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      Count: {state.count}
      {/* Calling our actions on button click */}
      <button
        type="button"
        onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 5 })}
      >
        -
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 5 })}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
