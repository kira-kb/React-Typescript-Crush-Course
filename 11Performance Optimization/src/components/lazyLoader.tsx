import { lazy, Suspense } from "react";

// const LazyComponent = lazy(() => import("./lazyComponent")); // this is for real project react has builtin method to handle lazy loading it is called lazy()

// simulation for 3 seconds
const LazyComponent = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./lazyComponent"));
    }, 3000);
  });
});

const LazyLoaderComponent: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default LazyLoaderComponent;

// Explanation:
// React.lazy dynamically loads the LazyComponent only when it’s rendered.
// Suspense provides a fallback UI (like a loading spinner) while the component is loading.
