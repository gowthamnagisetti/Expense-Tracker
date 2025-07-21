import { Router as ExpressRouter } from "express";
import income from '../models/income.js';
import { deleteIncome, getIncome, incomePost, updateIncome } from "../controllers/income_controller.js";
const Router = ExpressRouter();
import auth from '../middleware/auth.js';

Router.post('/', auth, incomePost);
Router.get('/:id', getIncome);
Router.delete('/:id', deleteIncome);
Router.put('/:id', updateIncome);
export default Router;