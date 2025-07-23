import { Router as ExpressRouter } from "express";
import expense from '../models/expense.js';
import { expenseDelete, expenseGet, expensePost, expensePut } from "../controllers/expense_controller.js";
import auth from '../middleware/auth.js';
const Router = ExpressRouter();


Router.post('/', auth, expensePost);

Router.get('/:id', expenseGet);

Router.delete('/:id', expenseDelete);

Router.put('/:id', expensePut);

export default Router;