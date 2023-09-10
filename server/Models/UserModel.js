const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstNameLastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    isAdmin: {
        type: Boolean,
        default:false
    },
    payed:{
        type:Boolean,
        default:false
    },
    acceptedPolicy:{
        type:Boolean,
        default:true
    },
    birthdate: {
        type: Date,
        required: true,
      },
      flights: [
        {
          type: Schema.Types.ObjectId,
          ref: "tickets",
        },
      ],
    },{
        timestamps: true
    })
    
    const UserModel = mongoose.model("users",UserSchema);
    module.exports = UserModel;