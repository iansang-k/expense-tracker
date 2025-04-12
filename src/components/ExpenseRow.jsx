import React from "react";

function ExpenseRow({ expense }) {
  return (
    <tr>
      <td>{expense.description}</td>
      <td>{expense.amount.toFixed(2)}</td>
      <td>{expense.category}</td>
      <td>
        <button className="delete-btn">Delete</button>
      </td>
    </tr>
  );
}

export default ExpenseRow;
