import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<{ theme: string; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const GlobalStateManagement: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default GlobalStateManagement;

// Explanation:
// createContext: Creates a new context for managing state globally.
// useContext: Allows components to access the global context and interact with the state.
// Context Provider: The ThemeProvider wraps around components that need access to the global state, providing the theme and toggleTheme functionality.
// When to Use Context API:
// Global State: When multiple components need access to the same state.
// Avoiding Prop Drilling: Instead of passing props down multiple layers, context allows for direct access to state.
// State Management in Larger Applications
// While useState, useReducer, and the Context API work well for small-to-medium applications, large applications often benefit from using dedicated state management libraries like Redux or Zustand.

// Redux: Centralized state management with a more complex but scalable approach.
// Zustand: A lightweight, simpler alternative to Redux that’s easy to integrate.
