const mongoose = require('mongoose');

// Is added for encrypting password. Also install : npm mongoose-field-encryption --save-exact in the terminal 
const passwordEncryption = require("mongoose-field-encryption").fieldEncryption     

const accountSchema = new mongoose.Schema({
    username : {
        type: String,
        require: true,
        unique: true,
        maxlength: 100

    },
    email : {
        type: String,
        require: true,
        maxlength: 50,
        unique: true
    },
    password : {
        type: String,
        require: true,
        maxlength: 50
    },
    
})

accountSchema.method("toJSON", function() {                    //create "id" instead of _id, __v
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

// To encrypt password
accountSchema.plugin(passwordEncryption, {              //Found on https://www.npmjs.com/package/mongoose-field-encryption
    fields: ["password"],
    secret : "some secret key",
    saltGenerator : (secret) => {
        return "1234567890123456"
    }
})

const User_Account = mongoose.model("users", accountSchema, "users")
module.exports = User_Account