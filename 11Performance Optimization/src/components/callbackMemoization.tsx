// useCallback is a hook that memoizes a function, preventing it from being recreated on every render. This is useful when passing functions to child components.
import React, { useCallback, useState } from "react";
interface ButtonProps {
  onClick(): void;
  count: number;
}

const Button: React.FC<ButtonProps> = React.memo(({ onClick, count }) => {
  // console.log("Button rendered");
  return (
    <button onClick={onClick}>Click me to increment Count: {count}</button>
  );
});

const CallbackParrentComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div>
        <Button onClick={handleClick} count={count} />
      </div>
    </>
  );
};

export default CallbackParrentComponent;

// Without useCallback, the handleClick function would be recreated on every render, causing the Button component to re-render.
// With useCallback, the function is only recreated if count changes.
