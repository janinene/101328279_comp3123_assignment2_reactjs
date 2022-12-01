const express = require("express")
const mongoose = require("mongoose")
const routes = express.Router()
const employeeModel = require('../model/Employee')

// ============ Get all employee list ============
routes.get('/', async (req,res) => {                   
    try {
        const employee = await employeeModel.find()
        res.status(200)
            .send(employee)
    }catch (error) {
        res.status(400).send(error)
    }

});

// ============ Create employee ============
routes.post('/add', async (req,res) => {  
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty!"})
    }
    const employee_content = new employeeModel({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email

    })

    await employee_content
            .save(employee_content)
            .then(data =>{
                res.send(data)
            })
            .catch(err => {
                res.status(500)
                    .send({ message:  err.message || "Some error occurred while creating the Employee Details." })
            })

});

// ============ Show details of employee by id ============
routes.get('/:eid', async (req,res) => {
    const id = req.params.eid
    await employeeModel.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404)
                        .send( { message: `Employee not found` })
                }
                else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500)
                    .send({ message: "Error retrieving employee" })
              })
});

// ============ Update employee details using id ============
routes.put('/:eid', async (req,res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to update can not be empty!" });
    }

    const id = req.params.eid
    await employeeModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                    res.status(404)
                        .send({ message: `Cannot update employee detail` })
                } 
                else {
                    res.send({ message: "Employee updated successfully." })
                }
            })
            .catch(err => {
                res.status(500)
                    .send({ message: "Error updating employee" })
            })

});

// ============ Delete employee by employee id ============
routes.delete('/:eid', async (req,res) => {
    const id = req.params.eid
    await employeeModel.findByIdAndDelete(id)
            .then(data => {
                if (!data) {
                    res.status(404)
                        .send( { message: `Cannot delete employee` })
                }
                else {
                    res.send({ message: "Employee deleted successfully." })
                }
            })
            .catch(err => {
                res
                  .status(500)
                  .send({ message: "Error retrieving employee" })
              })
});

module.exports = routes