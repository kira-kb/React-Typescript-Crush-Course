// Managing Complex State with useReducer
// When state becomes complex or has multiple related pieces of data that need to be updated together, useReducer provides a more structured way to handle state changes.

import { useReducer } from "react";

interface State {
  count: number;
}

interface Action {
  type: "increment" | "decrement";
}

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ComplexStateManagementUsing_useReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>Count: {state.count}</h4>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>{" "}
      &nbsp;
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default ComplexStateManagementUsing_useReducer;

// Explanation:
// useReducer: Takes a reducer function and an initialState. The reducer function defines how the state should be updated based on the action dispatched.
// Dispatching Actions: State is updated by dispatching actions (e.g., dispatch({ type: 'increment' })). The reducer decides how to update the state based on the action type.

// When to Use useReducer:
// Complex State: When the state has multiple values or intricate logic.
// Multiple Related State Changes: When updating multiple state variables at once (e.g., forms, complex components).
