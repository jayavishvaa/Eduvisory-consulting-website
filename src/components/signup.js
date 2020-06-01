import React, { Component } from 'react';

import '../components/signup.css';
import ValidatedSignup from './validatedSignup';

export default class Signup extends Component {
    render() {
        return (
            <div className="loginPage">
                <h1>Signup page</h1>
                <ValidatedSignup/>
            </div>
        )
    }
}
