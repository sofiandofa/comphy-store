import { connect } from "@/dbConfig/dbConfig";
import Budget from "@/models/budgetModel";
import { NextRequest } from "next/server";


connect();

export async function POST(request:NextRequest) {
    try {
        const reqBody=await request.json();
        const{id,expenseValue,expenseName}:{id:any,expenseValue:Number,expenseName:String}=reqBody;
        const budget=await Budget.findById({id});
        budget.expenseNames[budget.expenseNames.length]=expenseName;
        budget.expenseValues[budget.expenseValues.length]=expenseValue;



    } catch (error:any) {
        console.log(error.message)
    }
    
}