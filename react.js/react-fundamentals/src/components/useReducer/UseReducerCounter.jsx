import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        count: state.count - 1,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useReducer Counter</h1>

      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        ➕ Increment
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={{ marginLeft: "10px" }}
      >
        ➖ Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "RESET" })}
        style={{ marginLeft: "10px" }}
      >
        🔄 Reset
      </button>
    </div>
  );
}

export default UseReducerCounter;
