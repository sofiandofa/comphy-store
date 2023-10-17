"use client"
import { connect } from '@/dbConfig/dbConfig'
import React,{useState,useEffect, useContext} from 'react';
import { budgetContext } from '@/context/budget-context';

connect();


const  ShowBudget=({budget}:any)=> {
    
    const [toggle, setToggle] = useState(false)
    const[expenseNames,setExpenseNames]=useState([]);
    const[expenseValues,setExpenseValues]=useState([]);

    
    const [expense, setExpense] = useState({
        expenseName:"",
        expenseValue:"",
        id:"",
    })


    const{budgetname,budgetvalue,expensenames,_id}=budget
    
    const addExpense=(e:React.FormEvent<HTMLFormElement>)=>{
        
    }



    return (
            <div>
                <div>
                    <section className='p-4 rounded-sm  shadow-md'>
                        <div className='border border-green-500 flex flex-row  gap-5 px-2 py-1 mb-2 rounded-sm'>
                            <h3>{budgetname}</h3>
                            <h3> <span className='text-green-800'>{budgetvalue}</span> $</h3>
                        </div>
                        <div>
                            <select name="" id="" className='w-full text-center'>
                                {
                                    expensenames.map((name:String,index:any)=>{
                                        return(
                                            <option key={index} value="">{name}</option>
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
                {toggle&&

                <form onSubmit={addExpense}>
                        <label htmlFor="expense-name">expense name</label>
                        <input type="text" id="expense-name" value={expense.expenseName}
                            onChange={(e)=>setExpense({...expense,expenseName:e.target.value,id:budget._id})}/>
                        <label htmlFor="expense-value">expense value</label>
                        <input type="number" id="expense-value" value={expense.expenseValue}
                            onChange={(e)=>setExpense({...expense,expenseValue:e.target.value})}/>
                </form>}
            </div>
        )
    
}

export default ShowBudget;

