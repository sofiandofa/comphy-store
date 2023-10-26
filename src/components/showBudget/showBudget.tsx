"use client"
import { budgetContext } from '@/context/budget-context';
import { connect } from '@/dbConfig/dbConfig'
import React,{useState,useEffect, useContext} from 'react';

connect();


const  ShowBudget=({budget,deleteBudget}:any)=> {
    // const {expenseDataHandler}=useContext(budgetContext)
    //TODO :{useref for geting the values from forms}

    const [toggle, setToggle] = useState(false)
    const{budgetname,budgetvalue,expensenames,expensevalues,_id}=budget

    const expenseTotalvalue=():number=>{
        let total:number;
        const totalValue=expensevalues.forEach((ele: number)=>{
            return total+=ele
        })
        return totalValue;
    }
    const [expense, setExpense] = useState({
        expenseName:"",
        expenseValue:"",
        id:"",
    })

    
    const addExpense=(e:React.FormEvent<HTMLFormElement>)=>{
            // expenseDataHandler(expense)
        
    }
    useEffect(() => {
        
    }, [expense])
    

    return (
            <div>
                <div className={`${budgetvalue<expenseTotalvalue? "bg-red-400 text-black" : 'bg-blue-600 text-white'}  `}>
                    <section className='p-4 rounded-sm  shadow-md'>
                        <div className='border border-green-500 flex flex-row  gap-5 px-2 py-1 mb-2 rounded-sm'>
                            <div>
                                <h3>{budgetname}</h3>
                                <h3> <span className='text-green-800'>{budgetvalue}</span> $</h3>
                            </div>
                            <div className='flex flex-col space-x-4 border border-black'>
                                    <span> your total expenses value </span>
                                    <span>{expenseTotalvalue()}</span>
                            </div>
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
                <button
                onClick={deleteBudget(_id)}
                >
                    delete budget
                </button>
                {toggle&&

                <form onSubmit={addExpense}>
                        <label htmlFor="expense-name">expense name</label>
                        <input type="text" id="expense-name" value={expense.expenseName}
                            onChange={(e)=>setExpense({...expense,expenseName:e.target.value,id:budget._id})}/>
                        <label htmlFor="expense-value">expense value</label>
                        <input type="number" id="expense-value" value={expense.expenseValue}
                            onChange={(e)=>setExpense({...expense,expenseValue:e.target.value})}/>
                </form>
                }
            </div>
        )
    
}

export default ShowBudget;

