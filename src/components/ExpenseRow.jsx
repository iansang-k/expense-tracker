import React from "react";

function ExpenseRow({ expense }) {
  return (
    <tr className="border-b border-gray-400 hover:bg-blue-100">
      <td className="px-3 py-3">{expense.description}</td>
      <td className="px-3 py-3">{expense.amount.toFixed(2)}</td>
      <td className="px-3 py-3">
        <span className="px-2 py-2 bg-gray-300 text-blue-500 rounded-4xl text-xs">
          {expense.category}
        </span>
      </td>
      <td className="px-3 py-3">
        <button className="bg-red-600 hover:bg-red-700 text-gray p-1 rounded-full">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ExpenseRow;
