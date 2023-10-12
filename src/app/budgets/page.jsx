"use client"
import axios from 'axios';
import React,{useEffect,useState} from 'react'

function Budgets() {
    const[budgets,setBudgets]=useState({});


    useEffect(() => {
        try {
            async function fetchData() {
                const response = await axios.get("/api/budget/getBudgets");
                setBudgets(response.data);
            }
            fetchData();
        } catch (error) {
            console.log(error.message)
        }
    }, [])
    
    return (
        <main className='text-black'>
            
        </main>
    )
}

export default Budgets