const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name : {
        type: String,
        require: true,
        maxlength: 100

    },

    last_name : {
        type: String,
        require: true,
        maxlength: 50
    },

    email : {
        type: String,
        require: true,
        maxlength: 50,
        unique: true
    }

})


employeeSchema.method("toJSON", function() {                    //create "id" instead of _id, __v
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Employee = mongoose.model("employee", employeeSchema, "employee")
module.exports = Employee