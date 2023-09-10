const mongoose = require('mongoose');

const TicketsSchema = new mongoose.Schema({
    bookingId: { 
    type: String,
    required: true 
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    flight: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tickets",
    },
    },{
        timestamps: true
    })
    
    const TicketsModel = mongoose.model("tickets",TicketsSchema);
    module.exports = TicketsModel;