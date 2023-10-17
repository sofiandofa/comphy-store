import React, { useState } from 'react'


export const budgetContext=React.createContext(null);




function BudgetProvider({children}: {children: React.ReactNode}) {
    const[expenseData,setExpenseData]=useState(null);


    return (
        <budgetContext.Provider value={expenseData}>
            {children}
        </budgetContext.Provider>
    )
}

export default BudgetProvider;