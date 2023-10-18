"use client"
import ShowBudget from '@/components/showBudget/showBudget';
import BudgetProvider, { budgetContext } from '@/context/budget-context';

import axios from 'axios';
import React,{useEffect,useState,useContext} from 'react'

function Budgets() {
    const[budgets,setBudgets]=useState();
    const expenseData=useContext(budgetContext)


    useEffect(() => {
        try {
            async function fetchData() {
                const response = await axios.get("/api/budget/getBudgets");
                setBudgets(response.data.data);
            }
            fetchData();
        } catch (error) {
            console.log(error.message)
        }
    }, [])

    useEffect(() => {


    }, [expenseData])
    
    return (

        <BudgetProvider>
            <main className='flex flex-col sm:flex-row  items-center justify-between gap-6 container mx-auto mt-11'>
                {budgets.map(budget=>{
                    return(
                        <ShowBudget key={budget._id} budget={budget}   />
                    )
                })}
            </main>
        </BudgetProvider>
    )
}

export default Budgets