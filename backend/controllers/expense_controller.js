import express from 'express';
import expense from '../models/expense.js';

const expensePost = (req, res) => {
    const expenseBody = req.body;
    expenseBody.user = userId; // Set the userId in the expense body
    const newExpense = new expense(expenseBody);
    console.log(newExpense);

    newExpense.save()
        .then(() => {
            res.status(201).json(newExpense);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Error saving expense' });
        });
}

const expenseGet = async (req, res) => {
    const { id } = req.params;
    const expenseData = await expense.findById(id).populate('category', 'name');
    if (!expenseData) {
        return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json(expenseData);
    console.log(expenseData);
}

const expenseDelete = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const deletedExpense = await expense.findByIdAndDelete(id);
    if (!deletedExpense) {
        return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json({ message: 'Expense deleted successfully' });
    console.log(deletedExpense);
}

const expensePut = async (req, res) => {
    const { id } = req.params;
    const updatedExpense = await expense.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedExpense) {
        return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json(updatedExpense);
    console.log(updatedExpense);
}

export {
    expensePost,
    expenseGet,
    expenseDelete,
    expensePut
};
