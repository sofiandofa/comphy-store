"use client"

import React,{useState} from 'react';
import styles  from "./addBudget.module.css"
import axios from 'axios';
import Link from 'next/link';


function AddBudget() {
    const [budget, setBudget] = useState({
        budgetName:"",
        budgetValue:"",
    });

    const  addBudget=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await  axios.post("/api/budget/addBudget",budget);
        console.log(budget)
        setBudget({
            budgetName: "",
            budgetValue:""
        })
    }
    return (
        <div className='container mx-auto px-2 py-9'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold  text-4xl mb-5'>new budget</h1>
                <main className={`${""}`}>
                    <form
                    onSubmit={addBudget}
                        className='flex flex-col items-center'
                    >
                        <div className='flex  flex-col md:flex-row justify-between gap-4 mb-5'>
                            <div>
                                <label htmlFor="" 
                                className='font-bold text-slate-500 mr-2 border border-blue-500 rounded-sm px-2 py-1'>
                                    budget name</label>
                                <input
                                className='px-2 py-1'
                                id=''
                                    type="text" value={budget.budgetName} 
                                    onChange={(e)=>setBudget({...budget,budgetName:e.target.value})} />
                            </div>
                            <div>
                                <label htmlFor=""
                                className='font-bold text-slate-500 mr-2 border border-blue-500 rounded-sm px-2 py-1'
                                >budget value</label>
                                <input
                                className='px-2 py-1'
                                    type="text" value={budget.budgetValue} 
                                    onChange={(e)=>setBudget({...budget,budgetValue:(e.target.value)})}
                                />
                            </div>
                        </div>
            
                        <button
                        type='submit'
                        className='hover:bg-red-200 bg-white py-2 px-2 w-fit text-slate-700 rounded-sm font-medium'
                        // onClick={addBudget}
                        >
                            add the budget
                        </button>
                    </form>
                </main>
                <Link href="/budgets" 
                    className='border border-slate-500 rounded-sm font-normal italic bg-white px-2 py-1 opacity-70 mt-20'  >
                        see your budget expenses
                </Link>
            </div>
            
        </div>
    )
}

export default AddBudget