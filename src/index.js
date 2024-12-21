// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 800, () => {
        console.log(`service is running at PORT : ${process.env.PORT}`);
        
    })
})
.catch((error) => {
    console.log("DB connect fail !!", error);
    
})

/*
import express from "express"
const app = express()
;( async() => {
    try {
    await mongoose.connect(`${process.env.MONGDB_URI}/ ${DB_NAME}`) 
    app.on("error", () => {
        console.log("Error:", error);
        throw error
        
    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`)
    })

    } catch (error) {
        console.error("Error", error) 
        throw error
    }
})()
    */