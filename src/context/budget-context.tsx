"use client"

import React, { useState } from 'react'


export const budgetContext=React.createContext<Budget>( {
    expenseData:{
        expenseName:""
        ,expenseValue:""
        ,id:""
    },
    expenseDataHandler:()=>{}
});




function BudgetProvider({children}: {children: React.ReactNode}) {
    const[expenseData,setExpenseData]=useState({
        expenseName:"",
        expenseValue:"",
        id:""
    });

    const expenseDataHandler=(expense:ExpenseData):void=>{
        setExpenseData(expense)
    }
    
    const contextValue={expenseData,expenseDataHandler}
    return (
        <budgetContext.Provider value={{expenseData,expenseDataHandler}}>
            {children}
        </budgetContext.Provider>
    )
}

export default BudgetProvider;