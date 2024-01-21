const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, "Name is Required" ],
        maxLength: [20, "Name must be less than 20 char"],
        minLength: [5, "Name must be greater than 20 char"]
    },
    email:{
        type: String,
        trim: true,
        required: [true, "Email is Required" ],
        maxLength: [25, "Email must be less than 25 char"],
        unique: [true, "this email is already availble"],
        minLength: [8, "Email must be less greater 8 char"]
    },
    password:{
        type: String,
        trim: true,
        required: [true, "Please Create a Strong Password" ],
        maxLength: [20, "Password must be less than 20 char"],
        minLength: [5, "Password must be greater than 5 char"]
    },confirmPassword:{
        type: String,
        trim: true,
        required: [true, "Please Confirm Password" ],
        maxLength: [20, "Password must be less than 20 char"],
        minLength: [5, "Password must be greater than 5 char"]
    },
    forgetPasswordToken:{
        type: String
    },
    forgetPasswordExpiryDate:{
        type: Date
    } 
});


module.exports = mongoose.model("userModel", userSchema)