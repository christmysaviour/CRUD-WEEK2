const blogs =require('../models/blogs');

const getHome = (req,res)=>{
    blogs.find().then((result)=>res.render('index',{users:result}))
    .catch((err)=>console.log(err));
}
const addUser =(req,res)=>{
    res.render('partials/adduser');
}
const postUser = (req,res)=>{
    const blog = new blogs(req.body);
    blog.save()
    .then(()=>{
        res.redirect('/');
    })
    .catch((err)=>console.log(err))
    
}
const getUpdate = (req,res)=>{
    const id =  req.params.id;
    blogs.findOneAndUpdate(id)
    .then((result)=>res.render('partials/update',{user:result}))
    .catch((err)=>console.log(err))}



const postUpdate = (req,res)=>{
    const id =  req.params.id;
   blogs.findByIdAndUpdate(id,{
    $set:{ name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        amount:req.body.amount,
        card:req.body.card
    }
   })
    .then((result)=>res.redirect('/'))
    .catch((err)=>console.log(err))}


const deleteUser =(req,res)=>{
    var id = req.params.id;

   blogs.findByIdAndDelete(id)

   .then((result)=>res.redirect('/'))
}


module.exports ={
    getHome,addUser,postUser,getUpdate,postUpdate,deleteUser
}