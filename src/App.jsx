import ExpenseTable from "./components/ExpenseTable";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <ExpenseTable />
      </div>
    </>
  );
}

export default App;
