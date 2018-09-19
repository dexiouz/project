import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import AddData from './AddData'
import Maintable from './Maintable'


let arr = []
export default class Register extends Component {
  
  
  state = {
    warnings:'input first name',
  }

  getValues=()=>{
    let mylastname = document.getElementById('last').value
    let myclass = document.getElementById('class').value
    let myparentsname = document.getElementById('parents').value
    let myphonenumber = document.getElementById('phone').value
    let myhomeadress = document.getElementById('home').value
    let ourname = document.getElementById('first').value
    let warning = document.getElementById('warn')
    return ({mylastname, myclass, myparentsname, myphonenumber, myhomeadress, ourname,warning })
  }
  

  
  register = (e) => {
    e.preventDefault()
    let {mylastname, myclass, myparentsname, myphonenumber, myhomeadress, ourname,warning } =  this.getValues()
    let regfirstName = /[a-z,0-9]/g
    let reglastName = /[achecked-z,0-9]/g
    let regphoneNumber = /[0-9]/g

    if (ourname === '' ) {
      warning.innerHTML = this.state.warnings
    }else if (mylastname === '' ) {
      alert('input last name')
    } else if (!mylastname.match(reglastName)) {
      alert('incorrect name format')
    } else if (myparentsname === '' ) {
      alert('input parants name')

    } else if (!myphonenumber.match(regphoneNumber) || myphonenumber.length < 11) {
      alert('incorrect phone number format')
    } else if (myhomeadress = '' ) {
      alert('home address empty')
    } else if (myclass = '') {
      alert('class field empty')
    } else {
      alert('Registration successful')
    }
    arr.push(mylastname, myclass, myparentsname, myphonenumber, myhomeadress, ourname,warning)
    console.log(arr.myclass)
  }
   
 

  handleChange=({target})=>{
    let {value,name} = target
    this.setState({[name]:value} )
   
  }

  
  
 
//   addoption(e){
//     e.preventDefault()
//     alert('are you there')
//     const option=document.getElementById('add')
//     if(!option.value.trim()){
//         alert ('please enter a valid value to the item');
        
//     }else if(this.state.options.indexOf(option.value) > -1){
//         alert('this option already exists, please enter a new one');
        
// } 
// else{
//     this.state.options.push(option.value)

// }
//   }


  render() {
 
   
   const flag = true;
    return (
      <div>
        <Form onChange={this.handleChange} id='regform' style={{ marginLeft: '30rem', marginTop: '1rem', backgroundColor: 'gray', width: '30rem' }}>
          <h2 style={{ textAlign: 'center', color: 'black' }}>REGISTRATION FORM</h2>
          <p style={{ textAlign: 'center', color: 'black', marginTop:-15 }}>(all fields are required)</p>
          <Form.Field width={15} style={{ marginTop:-15 }}>
            <label style={{ color: 'black', marginLeft: '1rem' }}>First Name</label>
            <input style={{ marginLeft: '1rem', border: '0.01rem solid black' }} name='option' id='first' placeholder='First Name' name='firstName' />
            <div id='warn' style={{ marginLeft: '1rem', color: 'red' }}></div>
          </Form.Field>
          <Form.Field width={15}>
            <label style={{ color: 'black', marginLeft: '1rem' }}>Last Name</label>
            <input style={{ marginLeft: '1rem', border: '0.1rem solid black' }} placeholder='Last Name' name='lastName' id='last' />
          </Form.Field>
          <Form.Field width={15}>
            <label style={{ color: 'black', marginLeft: '1rem' }}>Parents Name</label>
            <input style={{ marginLeft: '1rem', border: '0.1rem solid black' }} placeholder='Parents Name' name='parentsName' id='parents' />
          </Form.Field>
          <Form.Field width={15}>
            <label style={{ color: 'black', marginLeft: '1rem' }}>Phone Number</label>
            <input required={true} style={{ marginLeft: '1rem', border: '0.1rem solid black' }} placeholder='Phone Number' name='phoneNumber' id='phone' />
           
            
          </Form.Field>
          <Form.Field width={15}>
            <label style={{ color: 'black', marginLeft: '1rem' }}>Home Address</label>
            <input style={{ marginLeft: '1rem', border: '0.1rem solid black' }} placeholder='Home adddress' name="homeAddress" id='home' />
          </Form.Field>
          <Form.Field width={15}>
            <label style={{ color: 'black', marginLeft: '1rem' }}>Class</label>
            <input style={{ marginLeft: '1rem', border: '0.1rem solid black' }} placeholder='Class' name='classes' id='class'/>
          </Form.Field>
          <Form.Field>
            <Checkbox value={false} style={{ marginLeft: '1rem', border: '0.1rem solid black' }} label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button onClick = {this.register} style={{ backgroundColor: 'skyblue', marginLeft: '1rem' }} type='submit'  >Submit</Button>
        </Form>
        
        

        
      </div>
    )
  }
}


