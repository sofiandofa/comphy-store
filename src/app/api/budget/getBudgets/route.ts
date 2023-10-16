import { connect } from "@/dbConfig/dbConfig";
import Budget from "@/models/budgetModel";
import { NextRequest, NextResponse } from "next/server";



connect();
export async function GET(){
    
    try {
        const budgets=await Budget.find();

        return NextResponse.json({data:budgets})
    } catch (error) {
        
    }
}