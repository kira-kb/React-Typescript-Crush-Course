// useMemo is a hook that memoizes the result of a calculation, preventing it from being recalculated on every render.

import { useMemo, useState } from "react";

const ExpensiveCalculation: React.FC<{ num: number }> = ({ num }) => {
  const compute = useMemo(() => {
    // console.log("computing...");
    return num * 2;
  }, [num]);

  return <h4>Expensive Calculation Result: {compute}</h4>;
};

const UseMemoParentComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>
        <ExpensiveCalculation num={count} />
        <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      </div>
    </>
  );
};

export default UseMemoParentComponent;

// Explanation:
// Without useMemo, the calculation would run on every render.
// With useMemo, the calculation only runs when num changes.
