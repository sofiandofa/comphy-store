"use client"
import { connect } from '@/dbConfig/dbConfig'
import Budget from '@/models/budgetModel';
import axios from 'axios';
import React, { useState,useEffect } from 'react'



connect();


const  ShowBudget=({budgets}:any)=> {
    const [toggle, setToggle] = useState(false)
    const[expenseNames,setExpenseNames]=useState([]);
    const[expenseValues,setExpenseValues]=useState([]);


    const [expense, setExpense] = useState({
        expenseName:"",
        expenseValue:"",
        id:"",
    })

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios.get("/api/budget/getBudgets");
            setExpenseNames(response.data.data.expenseNames)
            setExpenseValues(response.data.data.expenseValues)

        }
        fetchData();
        const expenseTotal=():number=>{
            let total:number=0;
            const values=expenseValues.forEach(e=>{
                return total+=e;
            })
            return total;
            
        }
    }, [])

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios.get("/api/budget/getBudgets");
            setExpenseNames(response.data.data.expenseNames)
            setExpenseValues(response.data.data.expenseValues)
        }
        fetchData();
    }, [toggle])
    

    const addExpense=async(e:React.FormEvent<HTMLFormElement>)=>{
        await axios.post("/api/budget/addExpenses",expense);
        setToggle(false);

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
                                    {
                                        expenseNames.map((expenseName,index)=>{
                                            return(
                                                <option key={index} value="">{expenseName}</option>
                                            )
                                        })
                                    }
                                    
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