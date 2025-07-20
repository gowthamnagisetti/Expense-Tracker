import express from 'express';
import connectDb from './config/db.js';
import expenseRoute from './routes/expenseRoute.js';
import expense from './models/expense.js';
import dotenv from 'dotenv';
import User from './models/user.js';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import income from './models/income.js';
import UserRoute from './routes/userRoutes.js';
import incomeRoute from './routes/incomeRoute.js';
import budgetRoute from './routes/budgetRoute.js';


dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/expense', expenseRoute);
app.use('/api/user', UserRoute);
app.use('/api/income', incomeRoute);
app.use('/api/user/budget', budgetRoute);


connectDb();