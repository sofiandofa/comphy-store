import mongoose from "mongoose";


const userschema=new mongoose.Schema({
    budgetname:{
        type:String,
        required:[true,'please provide a budget name'],
        unique:true,
    },
    budgetvalue:{
        type:String,
        required:[true,'please provide an'],
        unique:true,
    },
    expensenames:[String],
    expensevalues:[Number],
    isFinished:{
        type:Boolean,
        default:false,
    },
    day:Date,
})

const Budget=mongoose.models.budgets ||mongoose.model("budgets",userschema);



export default Budget;