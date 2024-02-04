const router = require('express').Router();

//controllers import: 
const { addIncome, getIncome, deleteIncome } = require('../controllers/income');

//testing endpoints
router.get('/', (req, res) => {
    res.send('Hello home page');
});

//actual endpoints: 
// post/add income
router.post('/add-income', addIncome).get('/get-incomes', getIncome).delete('/delete-income/:id', deleteIncome); 


module.exports = router;