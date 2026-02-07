import React, { useEffect, useState } from "react";
import { createEmployees, getEmployee, updateEmployee } from "../Services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployee = () =>{

    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')

    const navigator = useNavigate();

    const { id } = useParams();

    function saveEmployee(e){
        e.preventDefault();
        const employee = {firstName, lastName, email}
        
        if(id){
            updateEmployee(id,employee).then((response) =>{
                console.log( response.data)
                navigator('/employees')
            }
        )
               
        }else{
        createEmployees(employee).then((response) =>{
            console.log(response.data)
             navigator('/employees')  
            } ) 
        }
       
    }
    
    const back = ()=> {
        navigator('/employees')
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
             return <h2 className='text-center'>Add Employee</h2>
        }
    }

    useEffect(() => {
        getEmployee(id).then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        }

        )
    }
       ,[id]
    )

    return(
            <div className='container'>
                <br /> <br />
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            pageTitle()
                        }
                        <div className = 'card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name:</label>
                                    <input 
                                    type = 'text'
                                    placeholder='Enter first name'
                                    value = {firstName}
                                    className='form-control'
                                    onChange={(e)  => setFirstName(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name:</label>
                                    <input 
                                    type = 'text'
                                    placeholder='Enter last name'
                                    value = {lastName}
                                    className='form-control'
                                    onChange={(e) => setLastName(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email:</label>
                                    <input 
                                    type = 'text'
                                    placeholder='Enter email'
                                    value = {email}
                                    className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className='d-flex'>
                                <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                                <button type="button" className= 'btn btn-success ms-auto' onClick={back} >Back</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default AddEmployee