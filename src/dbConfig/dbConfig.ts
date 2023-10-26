

import mongoose from "mongoose";





export async function connect(){
    try {
        const uri=process.env.MONGO_URL;
        mongoose.connect(uri!)
        const connection= mongoose.connection;
        connection.on("connect",()=>{
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


