import React, { useState } from "react";
import ExpenseRow from "./ExpenseRow";

function ExpenseTable() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Groceries",
      amount: 50,
      category: "Food",
    },
    {
      id: 2,
      description: "Bus fare",
      amount: 2.5,
      category: "Transport",
    },
    {
      id: 3,
      description: "Movie ticket",
      amount: 12,
      category: "Entertainment",
    },
  ]);
  return (
    <div className="expense-table">
      <h2>My Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount ($)</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <ExpenseRow key={expense.id} expense={expense} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
