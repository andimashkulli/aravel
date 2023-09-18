const express = require("express");
const router = express.Router();
const Ticket = require('../Models/TicketsModel');
const UsersTicket = require("../Models/UsersTicketModel");


// 1. GET METHOD TO GET ALL THE TICKETS(FLIGHTS)

router.get("/", (req,res) => {
    Ticket.find()
    .then((tickets) => res.status(200).json(flights))
    .catch((error) => res.status(500).json("Error:" + error));
})


// 2. POST METHOD TO CREATE A NEW TICKET(FLIGHT)
router.post("/",(req,res) => {
    const newTicket = new Ticket(req.body);
    newTicket
    .then((result) => res.status(200).json("Flight added!"))
    .catch((error) => res.status(500).json("Error:" + error));
})




// 3. FETCH(GET) A SINGLE FLIGHT ('/:ID)
router.get("/:id", (req,res) => {
    Ticket.findById(req.params.id)
    .then((ticket) => res.status(200).json(ticket))
    .catch((error) => res.status(500).json("Error:" + error));
})





// 4. DELETE A FLIGHT
router.delete("/:id", (req,res) => {
    Ticket.findByIdAndDelete(req.params.id)
    .then((ticket) => res.status(200).json("Ticket deleted"))
    .catch((error) => res.status(500).json("Error:" + error));
})


// 5. SEARCH TICKETS(FLIGHTS) WITH POST METHOD, PARSE METHOD FOR DATE AND FROM,TO CRITERIA
// IN ORDER TO GET THE RESULT

router.post("/search",(req,res) => {
    const {from,to} = req.body;
    const startDate = Date.parse(req.body.date);
    const endDate = startDate * 24 * 60 * 60 * 1000;
    Ticket.find({from,to, date: {$gte: startDate, $lt: endDate}})
    .exec()
    .then((tickets) => res.status(200).json(tickets))
    .catch((err) => res.status(500).json("Error: " + err));
})

module.exports = router;
