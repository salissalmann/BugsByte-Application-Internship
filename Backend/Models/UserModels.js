const mongoose = require('mongoose');
const {Schema } = mongoose;

const UserScheme = new Schema(
    {
        email:
        {
            type: String,
            unique: true
        },
        password: 
        {
            type: String,
        },
        name:
        {
            type: String,
        },  
        timestamp: 
        {
            type: Date,
            default: Date.now,
        },
    }
);
const User = mongoose.model('User' ,UserScheme);
module.exports = User;