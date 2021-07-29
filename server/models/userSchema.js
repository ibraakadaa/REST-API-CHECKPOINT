const mongoose = require('mongoose')
const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};// validator function

const userSchema = new mongoose.Schema({
    fname: {
        type:String
    },
    lname:{
        type: String,
        required: [true,'you must add your last name !!'],
    },
    age:{
        type: Number,
        required: [true,'you must add your age !!']
    },
    email:{
        type: String,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address']

    },
    password:{
        type: String,
        required: [true,'you must add your password !!'],
    }
})  
const user=mongoose.model('person',userSchema)
module.exports=user;


       // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

//       validate: [validateEmail, 'Please fill a valid email address'], 
