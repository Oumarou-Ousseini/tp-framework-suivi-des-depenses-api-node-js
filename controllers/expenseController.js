const Expense = require('../models/Expense');

// @desc    Get all expenses
// @route   GET /api/expenses
// @access  Public
exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json({
      success: true,
      count: expenses.length,
      data: expenses
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Add new expense
// @route   POST /api/expenses
// @access  Public
exports.addExpense = async (req, res, next) => {
  try {
    const expense = await Expense.create(req.body);
   
    res.status(201).json({
      success: true,
      data: expense
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
     
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @desc    Get expenses by category
// @route   GET /api/expenses/category/:category
// @access  Public
exports.getExpensesByCategory = async (req, res, next) => {
  try {
    const expenses = await Expense.find({ category: req.params.category });
   
    res.status(200).json({
      success: true,
      count: expenses.length,
      data: expenses
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get total expenses for a period
// @route   GET /api/expenses/total?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
// @access  Public
exports.getTotalExpensesForPeriod = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.query;
   
    const expenses = await Expense.find({
      date: {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      }
    });
   
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
   
    res.status(200).json({
      success: true,
      count: expenses.length,
      total: total,
      data: expenses
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};