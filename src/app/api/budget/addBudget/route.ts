import { connect } from "@/dbConfig/dbConfig";
import Budget from "@/models/budgetModel";
import { NextRequest,NextResponse } from "next/server";

connect();

export async  function  POST(request:NextRequest){
    try {
        const reqBody=await request.json();
        const{budgetName,budgetValue}=reqBody;
        const newBudget=new Budget({
            budgetName,
            budgetValue,
        })
        await  newBudget.save();
        return NextResponse.json({message:"user created succesfully" ,success:true,savedBudget:true})
    } catch (error:any) {

        console.log(error.message)
    }
}