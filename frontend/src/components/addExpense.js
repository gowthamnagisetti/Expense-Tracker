import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = () => {
    const [step, setStep] = useState(1);
    const [categoryName, setCategoryName] = useState('');
    const [categoryId, setCategoryId] = useState(null);

    const [expenseData, setExpenseData] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const handleCategorySubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/category/add", {
                name: categoryName,
            });
            setCategoryId(res.data._id);
            setStep(2);
        } catch (error) {
            console.error("Error adding category", error);
        }
    };

    const handleExpenseSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/expense/", {
                ...expenseData,
                category: categoryId,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            alert("Expense Added");
        } catch (error) {
            console.error("Error adding expense", error);
        }
    };

    return (
        <div>
            {step === 1 && (
                <form onSubmit={handleCategorySubmit}>
                    <input
                        type="text"
                        placeholder="Enter Category"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <button type="submit">Next</button>
                </form>
            )}

            {step === 2 && (
                <form onSubmit={handleExpenseSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={expenseData.title}
                        onChange={(e) => setExpenseData({ ...expenseData, title: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={expenseData.amount}
                        onChange={(e) => setExpenseData({ ...expenseData, amount: e.target.value })}
                    />
                    <input
                        type="date"
                        value={expenseData.date}
                        onChange={(e) => setExpenseData({ ...expenseData, date: e.target.value })}
                    />
                    <button type="submit">Add Expense</button>
                </form>
            )}
        </div>
    );
};

export default AddExpense;