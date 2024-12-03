import "./App.css";
import ComplexStateManagementUsing_useReducer from "./components/complexStateManagement";
import GlobalStateManagement from "./components/globalStateManagement";
import StateManagementUsing_useState from "./components/localStateManagement";

function App() {
  return (
    <>
      <h3>⭐ Local State Management</h3>
      <StateManagementUsing_useState />

      <h3>⭐ Complex State Management</h3>
      <ComplexStateManagementUsing_useReducer />

      <h3>⭐ Global State Management</h3>
      <GlobalStateManagement />
    </>
  );
}

export default App;
