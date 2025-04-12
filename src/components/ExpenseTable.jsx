import React, { useState } from "react";
import ExpenseRow from "./ExpenseRow";

function ExpenseTable() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 50, category: "Food" },
    { id: 2, description: "Bus fare", amount: 5, category: "Transport" },
    {
      id: 3,
      description: "Movie ticket",
      amount: 10,
      category: "Entertainment",
    },
  ]);

  const [newExpense, setNewExpense] = useState({
    description: "",
    amount: "",
    category: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: Date.now(),
      description: newExpense.description,
      amount: parseFloat(newExpense.amount),
      category: newExpense.category,
    };
    setExpenses([...expenses, expense]);
    setNewExpense({ description: "", amount: "", category: "Food" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const filteredExpenses = expenses.filter((expense) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      expense.description.toLowerCase().includes(searchLower) ||
      expense.category.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="w-[95%] mx-auto my-6 font-sans">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">My Expenses</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <form
            onSubmit={handleSubmit}
            className="p-4 bg-white rounded-lg shadow-md sticky top-4"
          >
            <h3 className="text-xl font-semibold mb-4">Add New Expense</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={newExpense.description}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount (Ksh)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={newExpense.amount}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={newExpense.category}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white p-2 rounded-md transition"
            >
              Add Expense
            </button>
          </form>
        </div>

        <div className="w-full md:w-3/4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by description or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <table className="w-full shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-3 px-3 text-left">Description</th>
                <th className="py-3 px-3 text-left">Amount (Ksh)</th>
                <th className="py-3 px-3 text-left">Category</th>
                <th className="py-3 px-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense) => (
                <ExpenseRow key={expense.id} expense={expense} />
              ))}
              {filteredExpenses.length === 0 && (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-gray-500">
                    No expenses found matching your search
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTable;
