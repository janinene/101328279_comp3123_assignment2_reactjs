import axios from 'axios'
import React, { Component } from 'react'

export default class EditEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
        }
    }

    componentDidMount(){
        axios.get('https://comp3123-101328279-assignment2.herokuapp.com/api/employee/' + this.props.id)
        .then(res => {
            this.setState({
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                email: res.data.email
            })
            console.log(res.data)
        })
        .catch((error) => console.log(error))
    }

    getEmployeeById(id) {
        axios.get(`ttps://comp3123-101328279-assignment2.herokuapp.com/api/employee/${id}`)
        .then(res =>  { 
            console.log(res.data)
        })
    }

    onChangeEvent = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    
    editEmployee = async (e) => {
        e.preventDefault();
        const newEmployee = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        }
        await axios.put('https://comp3123-101328279-assignment2.herokuapp.com/api/employee/' + this.props.id, newEmployee )
        // await axios.post(`http://localhost:8080/api/employee/add`,  newEmployee )
        .then(res => { 
            console.log(res.status); 
            // console.log(res.data);
        })
        .catch(error => console.log(error))
    }



  render() {
    return (
        <div className="add-employee">
            <h1>Edit Employee</h1>

            <form onSubmit={this.editEmployee}>
                <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="firstName" 
                            name="first_name" 
                            value={this.state.first_name}
                            onChange={this.onChangeEvent}
                            placeholder="First Name" required
                        />
                </div>
                <br />
                <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lastName" 
                            name="last_name" 
                            value={this.state.last_name}
                            onChange={this.onChangeEvent}
                            placeholder="Last Name" required
                        />
                </div>
                <br />
                <div className="form-group">
                        <label htmlFor="emailAddress">Email ID:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="emailAddress"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeEvent}
                            placeholder="Email Address" required
                        />
                </div>
                <br />
                <div className='button-div'>
                    <button type="submit" className="btn btn-success">Save</button>
                    {/* <button type="submit" className="btn btn-danger cancel">Cancel</button> */}
                </div>                        
            </form>
        </div>
    )
  }
}
