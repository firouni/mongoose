const express = require('express')
const contactRouter = express.Router()
const contactSchema = require('../model/contact')

contactRouter.get('/getuser',async (req,res)=>{
    try{
        const cnt =  await contactSchema.find()
        res.status(200).json({msg:"user list", cnt})
    }catch{console.log(err)}
})
contactRouter.post('/adduser',async (req,res)=>{
    try{
        const newContact = contactSchema(req.body)
        await newContact.save()
        res.status(200).json({msg:"new contact added", newContact})
    }catch{console.log(err)}
})
contactRouter.put('/upduser/:id', async (req,res)=>{
    try{
        const {id} = req.params
        const modContact = await contactSchema.findByIdAndUpdate(id, {$set:{...req.body}})
        res.status(200).json({msg:"contact modified", modContact})
    }catch{console.log(err)}
})
contactRouter.delete('/deletuser/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const delContact = await contactSchema.findByIdAndDelete(id)
        res.status(200).json({msg:"contact deleted"})
    }catch{console.log(err)}
})
contactRouter.get('/getuser/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const getbyidcnt = await contactSchema.findById(id)
        res.status(200).json({msg:"contact found", getbyidcnt})
    }catch{console.log(err)}
})

module.exports = contactRouter;