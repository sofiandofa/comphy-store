

import mongoose from "mongoose";





export async function connect(){
    try {
        const uri:string=process.env.MONGO_URL as  string;
        mongoose.connect(uri!)
        const connection= mongoose.connection;
        connection.on("connected",()=>{
            console.log("mongoose connect succsefull");
        })
        connection.on("error",(err)=>{
            console.log(err)
            process.exit();
        })

    } catch (error) {
        console.log("")
    }
}


