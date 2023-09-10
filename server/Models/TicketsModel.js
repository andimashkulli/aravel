const mongoose = require('mongoose');

const TicketsSchema = new mongoose.Schema({
    airplaneName: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required:true
    },
    to: {
        type: String,
        required:true
    },
    start: {
        type: Date,
        required: true,
    },
    end:{
        type: Date,
        required: true,
    },
    gate:{
        type: String,
        required: true,
    },
    price:{
        type:Number,
        default:true
    },
    quantity:{
        type:Number,
        default:true
    },

    },{
        timestamps: true
    })
    
    const TicketsModel = mongoose.model("tickets",TicketsSchema);
    module.exports = TicketsModel;