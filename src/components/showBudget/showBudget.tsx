import React from 'react'


const    ShowBudget=({budgets}:any)=> {
    const content=budgets.map((budget:any)=>{
        return (
            <div key={budget._id}>
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
        )
    })
    return content;
}

export default ShowBudget;