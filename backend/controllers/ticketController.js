const aysncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')
//Get Tickets
const getTickets = aysncHandler(async(req , res) => {
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    const tickets = await Ticket.find({user: req.user.id})
    res.status(200).json(tickets)
})

//get single Ticket
const getTicket = aysncHandler(async(req , res) => {
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    const ticket = await Ticket.findById(req.params.id)
    if(!ticket){
        res.status(404)
        throw new Error('We cant find Ticket')
    }
    if(ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not Authorised')
    }
    res.status(200).json(ticket)
})


//create new tickets
const createTicket = aysncHandler(async(req , res) => {
    const {product , description} = req.body
    if(!product || !description){
        res.status(400)
        throw new Error('Add a description and product')
    }
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    const ticket = Ticket.create({
        product,
        description,
        user: req.user.id,
        status: 'new'
    })
    res.status(201).json(ticket)
})

//Delete Ticket
const deleteTicket = aysncHandler(async(req , res) => {
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    const ticket = await Ticket.findById(req.params.id)
    if(!ticket){
        res.status(404)
        throw new Error('We cant find Ticket')
    }
    if(ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not Authorised')
    }
    await ticket.remove()
    res.status(200).json({success: true})
})

//Update Ticket
const updateTicket = aysncHandler(async(req , res) => {
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    const ticket = await Ticket.findById(req.params.id)
    if(!ticket){
        res.status(404)
        throw new Error('We cant find Ticket')
    }
    if(ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not Authorised')
    }

    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id , req.body , { new: true })
    res.status(200).json(ticket)
})



module.exports = {
    getTickets,
    createTicket,
    getTicket , 
    deleteTicket,
    updateTicket
}