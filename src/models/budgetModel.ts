import mongoose from "mongoose";


const userschema=new mongoose.Schema({
    budgetName:{
        type:String,
        required:[true,'please provide a budget name'],
        unique:true,
    },
    budgetValue:{
        type:Number,
        required:[true,'please provide an'],
        unique:true,
    },
    expenseName:{
        type:String,
        required:[true,'please provide a budget name'],
        unique:true,
    },
    expenseValue:{
        type:Number,
        required:[true,'please provide an'],
        unique:true,
    },
    
    isFinished:{
        type:Boolean,
        default:false,
    },
    day:Date,

})

const Budget=mongoose.models.budgets ||mongoose.model("budgets",userschema);



export default Budget;