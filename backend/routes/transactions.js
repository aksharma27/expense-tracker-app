const router = require('express').Router();

//controllers import: 
const { addIncome, getIncome, deleteIncome } = require('../controllers/income');
const {addExpense, getExpense, deleteExpense } = require('../controllers/expense');

//testing endpoints
router.get('/', (req, res) => {
    res.send('Hello home page');
});

//actual endpoints: 
//post/add income;
router.post('/add-income', addIncome).get('/get-incomes', getIncome).delete('/delete-income/:id', deleteIncome)
.post('/add-expense', addExpense).get('/get-expense', getExpense).delete('/delete-expense/:id', deleteExpense); 


module.exports = router;