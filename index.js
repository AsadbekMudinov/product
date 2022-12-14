const express=require('express')
const app=express()
const mongoose =require('mongoose')
const appRouter=require('./router')
const cors = require('cors')
const bcrypt=require('bcrypt')
const  path = require('path')
require('dotenv').config();
const port=process.env.PORT || 5000
app.use(express.json())
app.use(cors())


// https://userboshqaruv.herokuapp.com/user


mongoose.connect(process.env.DATABASE ,
    {
        useNewUrlParser:true ,
        useUnifiedTopology:true}
)
.then(() => {
    console.log('Bazaga ulandi')
})
.catch((err)=> {
    console.log(err)
})

// mongoose.connect('mongodb://localhost/products' ,
//     {
//         useNewUrlParser:true ,
//         useUnifiedTopology:true}
// )
// .then(() => {
//     console.log('Bazaga ulandi')
// })
// .catch((err)=> {
//     console.log(err)
// })
    
    
app.use('/product', appRouter)


app.listen(port, ()=>{
    console.log("5000 port working");
})