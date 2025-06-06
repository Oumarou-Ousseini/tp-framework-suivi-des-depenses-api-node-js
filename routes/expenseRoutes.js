const express = require('express');
const {
  getExpenses,
  addExpense,
  getExpensesByCategory,
  getTotalExpensesForPeriod
} = require('../controllers/expenseController');

const router = express.Router();

router
  .route('/')
  .get(getExpenses)
  .post(addExpense);

router
  .route('/category/:category')
  .get(getExpensesByCategory);

router
  .route('/total')
  .get(getTotalExpensesForPeriod);

module.exports = router;