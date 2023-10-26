import { connect } from "@/dbConfig/dbConfig";
import Budget from "@/models/budgetModel";
import { NextRequest ,NextResponse} from "next/server";


connect();

export async function PUT(request:NextRequest) {
    try {
        const reqBody=await request.json();
        const{id,expensevalue,expensename}:{id:any,expensevalue:Number,expensename:String}=reqBody;
        const budget=await Budget.findById({id});
        budget.expensenames[budget.expensenames.length]=expensename;
        budget.expenseValues[budget.expenseValues.length]=expensevalue;
        return NextResponse.json({message:"budget isadded"},{status:201})


    } catch (error:any) {
        console.log(error.message)
    }
    
}