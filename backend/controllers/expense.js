const expenseSchema = require("../models/expenseModel");


//addExpense controller
exports.addExpense = async (req, res) => {
    // console.log(req.body);
    const {title, amount, category, description, date} = req.body;  //type is missing here from expensemodel.js

    //instance(json object) of expense schema
    const expense = expenseSchema({
        title, 
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({message: "All fields are required!"})
        }
        if (amount <= 0 || !amount === "number") {
            return res.status(400).json({message: "Amount must be a number"});
        }
        await expense.save();
        res.status(200).json({message: "expense saved successfully"});
    } catch(e) {
        res.status(500).json({message: "server error"});
    }
}



//get expense controller 
exports.getExpense = async (req, res) => {
    try {
        const expenses = await expenseSchema.find().sort({createdAt: -1});
        res.status(200).json(expenses);
    } catch (e) {
        res.status(500).json({message: "server error!"});
        
    }   
}


//delete expense controller 
exports.deleteExpense = async (req, res) => {
   const {id} = req.params;         //not from body, id is coming from params
//    console.log(req.params)
   expenseSchema.findByIdAndDelete(id).then((expense) => {
    res.status(200).json({message: "expense deleted successfully"});
   }).catch((e) => {
    res.status(500).json({message:"server error!"});
   });
};