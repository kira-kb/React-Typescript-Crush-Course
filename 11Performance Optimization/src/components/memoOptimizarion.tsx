// React.memo is a higher-order component that prevents a component from re-rendering if its props haven’t changed. This is useful for functional components that only depend on props.

import React, { useState } from "react";

interface ChildComponentProps {
  name: string;
}

// child component wrapped in React.memo
const ChildComponent: React.FC<ChildComponentProps> = React.memo(({ name }) => {
  // console.log("Child rendered");
  return <h4>🚩 {name}</h4>;
});

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <ChildComponent name="hello kira" />
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
    </div>
  );
};

export default ParentComponent;

// Explanation:
// Without React.memo, the ChildComponent would re-render every time the parent renders, even if its props don't change.
// With React.memo, the ChildComponent only re-renders if its name prop changes.
