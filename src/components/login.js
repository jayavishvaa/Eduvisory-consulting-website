import React, { Component } from 'react';
import ValidatedLogin from '../components/validatedLogin';
import '../components/login.css';




export default class Login extends Component {
  render() {
    return (
      <div className="loginPage">
        <h1>LOGIN FORM</h1>
        <ValidatedLogin/>
        
      </div>

    )
  }
}
