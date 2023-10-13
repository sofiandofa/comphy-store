import { connect } from "@/dbConfig/dbConfig";
import Budget from "@/models/budgetModel";
import { NextRequest, NextResponse } from "next/server";



connect();
export async function GET(request:NextRequest){
    
    try {
        const budgets=await Budget;

        return NextResponse.json({data:budgets})
    } catch (error) {
        
    }
}