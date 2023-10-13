"use client"
import { connect } from '@/dbConfig/dbConfig'
import Budget from '@/models/budgetModel';
import axios from 'axios';
import React, { useState } from 'react'



connect();


const  ShowBudget=({budgets}:any)=> {
    const [toggle, setToggle] = useState(false)
    const [expense, setExpense] = useState({
        expenseName:"",
        expenseValue:"",
        id:"",
    })


    const addExpense=async(e:React.FormEvent<HTMLFormElement>)=>{
        axios.post("/api/budget/addExpenses",expense)
    }


    const content=budgets.map((budget:any)=>{
        return (
            <div key={budget._id}>
                <div>
                        <section className='p-4 rounded-sm  shadow-md'>
                            <div className='border border-green-500 flex flex-row  gap-5 px-2 py-1 mb-2 rounded-sm'>
                                <h3>{budget.name}</h3>
                                <h3> <span className='text-green-800'>{budget.value}</span> $</h3>
                            </div>
                            <div>
                                <select name="" id="" className='w-full text-center'>
                                    <option value="">expense-1</option>
                                    <option value="">expense-2</option>
                                </select>
                            </div>
                        </section>
                </div>
                <button
                    onClick={()=>setToggle(true)}
                    >
                        add expense
                </button>
                {
                    toggle&&

                    (<form onSubmit={addExpense}>
                        <label htmlFor="expense-name">expense name</label>
                        <input type="text" id="expense-name" value={expense.expenseName}
                            onChange={(e)=>setExpense({...expense,expenseName:e.target.value,id:budget._id})}/>
                        <label htmlFor="expense-value">expense value</label>
                        <input type="number" id="expense-value" value={expense.expenseValue}
                            onChange={(e)=>setExpense({...expense,expenseValue:e.target.value})}/>
                    </form>)
                }

            </div>
        )
    })
    return content;
}

export default ShowBudget;