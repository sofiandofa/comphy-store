"use client"
import ShowBudget from '@/components/showBudget/showBudget';
import axios from 'axios';
import React,{useEffect,useState} from 'react'

function Budgets() {
    const[budgets,setBudgets]=useState();


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

    

    return (
        <main className='flex flex-col sm:flex-row  items-center justify-between gap-6 container mx-auto mt-11'>
            
            {budgets.map(budget=>{
                return(
                    <ShowBudget key={budget._id} budget={budget} />
                )
            })}
        </main>
    )
}

export default Budgets