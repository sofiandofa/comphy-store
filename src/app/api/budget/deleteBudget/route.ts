import { connect } from "@/dbConfig/dbConfig";
import Budget from "@/models/budgetModel";
import { NextRequest, NextResponse } from "next/server";



connect();
export async function DELETE(request:NextRequest){
    
    try {
        const reqBody=await request.json();
        const{id}=reqBody;
        const budget=await Budget.findOneAndDelete({id});

        return NextResponse.json({message:"budget deleted"})
    } catch (error) {
        
    }
}