const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Router = require('./route/Route')

const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded());

const dbURL =("mongodb+srv://admin:12345@cluster0.3zszrgm.mongodb.net/?retryWrites=true&w=majority");
mongoose.connect(dbURL).then((result)=>{
    
app.listen(3000,()=>{
    console.log("Server is running in port 3000");
})
    console.log("Database is connected");
}).catch((err)=>{
    console.log(err);
})


app.use('/',Router);







// app.get("/update/:id",(req,res)=>{
//         const id =  req.params.id;
//     //    blogs.findByIdAndUpdate(id,{
//     //     $set:{ name:req.body.name,
//     //         email:req.body.email,
//     //         gender:req.body.gender,
//     //         amount:req.body.amount,
//     //         card:req.body.card
//     //     }
//     //    })
//     //     .then((result)=>res.redirect('/'))
//     //     .catch((err)=>console.log(err))}
//         )



// app.get('/add-user',(req,res)=>{
//     const b = new blogs({
//         name:"Joel",
//         email:"christmysaviour@protonmail.com",
//         gender:"Male",
//         amount:1000000,
//         card:"Debit"
//     })
//     b.save().then((result)=>res.send(result)).catch((err)=>console.log(err));
// })

// app.get('/all-blogs',(req,res)=>{
//         blogs.find()
//         .then((result)=>res.send(result))
//         .catch((err)=>console.log(err))
// })
// app.get('/single-blog',(req,res)=>{
//     blogs.findById()
//     .then((result)=>res.send(result))
//     .catch((err)=>console.log(err));
// })




app.use(express.static(path.resolve(__dirname,'assets')));



