interface Budget{
    expenseData:ExpenseData,
    expenseDataHandler:(c:ExpenseData)=>void
}

type ExpenseData={
    expenseName:string
    ,expenseValue:string
    ,id:string

}

