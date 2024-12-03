// Local State Management with useState
// In React, local component state is typically managed using the useState hook. It allows components to have their own state that can be updated dynamically based on user interaction or other changes.

import { useState } from "react";

const StateManagementUsing_useState: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <div>
        <h4>Count: {count}</h4>
        <button onClick={increment}>Increment</button> &nbsp;
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};

export default StateManagementUsing_useState;

// Explanation:
// useState: Initializes a piece of state (count) with an initial value (0). The setCount function is used to update the state.
// Component Re-render: When state is updated (e.g., when increment or decrement is called), the component re-renders with the updated state value.
