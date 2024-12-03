import "./App.css";
import CallbackParrentComponent from "./components/callbackMemoization";
import LazyLoaderComponent from "./components/lazyLoader";
import ParentComponent from "./components/memoOptimizarion";
import ProfileParentComponent from "./components/profilePerformanceMonitoring";
import UseMemoParentComponent from "./components/useMemoMemoization";

function App() {
  return (
    <>
      <h3>⭐ Memoization with React.memo</h3>
      <ParentComponent />

      <h3>⭐ Memoization with useCallback</h3>
      <CallbackParrentComponent />

      <h3>⭐ Memoization with useMemo</h3>
      <UseMemoParentComponent />

      <h3>⭐ Memoization with lazy loading</h3>
      <LazyLoaderComponent />

      <h3>⭐ Monitorng using Profiler component</h3>
      <ProfileParentComponent />
    </>
  );
}

export default App;

// Introduction to React Performance Optimization
// React is designed to be efficient, but as your app grows, certain patterns or components can lead to performance issues. The key areas to focus on for optimization include:

// Minimizing unnecessary re-renders
// Optimizing expensive calculations or operations
// Efficiently handling large data sets or complex component hierarchies

//?-------------------------------------------------------------------------------------
// Unnecessary re-renders can cause performance issues, especially in larger applications. Here are some ways to avoid them:

// Use React.memo for functional components to prevent re-renders when props haven’t changed.
// Use useCallback and useMemo to memoize functions and expensive calculations.
// Keep state localized: Avoid lifting state up unless necessary. The more state is shared between components, the more likely re-renders will occur.
// Avoid anonymous functions and objects in JSX, as these are re-created on every render.
// Key Points:
// React.memo is used to prevent unnecessary re-renders in functional components.
// useCallback memoizes functions, and useMemo memoizes expensive calculations.
// Lazy loading with React.lazy and code-splitting improves the performance of large apps.
// Use the React Profiler to identify and fix performance bottlenecks.
// Avoid unnecessary re-renders by using memoization techniques and properly managing state.
