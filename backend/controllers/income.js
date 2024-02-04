const IncomeSchema = require("../models/IncomeModel");


//addIncome controller

exports.addIncome = async (req, res) => {
    // console.log(req.body);
    const {title, amount, category, description, date} = req.body;

    //instance of income schema
    const income = IncomeSchema({
        title, 
        amount,
        category,
        description,
        date
    })
    // console.log(income);

    try {
        //validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({message: "All fields are required!"})
        }
        if (amount <= 0 || !amount === "number") {
            return res.status(400).json({message: "Amount must be a number"});
        }
        await income.save();
        res.status(200).json({message: "income saved successfully"});
    } catch(e) {
        res.status(500).json({message: "server error"});
    }
}



//get income controller 
exports.getIncome = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes);
    } catch (e) {
        res.status(500).json({message: "server error!"});
        
    }   
}


//delete income controller 
exports.deleteIncome = async (req, res) => {
   const {id} = req.params;         //not from body, id is coming from params
   console.log(req.params)
   IncomeSchema.findByIdAndDelete(id).then((income) => {
    res.status(200).json({message: "income deleted successfully"});
   }).catch((e) => {
    res.status(500).json({message:"server error!"});
   });
};