import { connect } from "@/dbConfig/dbConfig";
import Budget from "@/models/budgetModel";
import { NextRequest,NextResponse } from "next/server";


connect();
export async  function  GET(request:NextRequest){
    try {

        const reqBody=await request.json();
        console.log(reqBody)
        const{budgetname,budgetvalue}=reqBody;
        const newBudget=new Budget({
            budgetname,
            budgetvalue:budgetvalue.toString(),
        })
        console.log(reqBody)
        const savedUser=await  newBudget.save();
        return NextResponse.json({message:"user created succesfully" ,success:true,savedBudget:true})
    } catch (error:any) {

        console.log(error.message)
    }
}