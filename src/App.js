import React, { Component } from 'react';
import Routes from './components/routes';
import './App.css';
import {Link} from 'react-router-dom';




export default class App extends Component {

    render() {
        return (
            <div>
              <div className="header">
               <Link to="/default" className="logo">EDUVISORY</Link>
               <div className="header-right">
               <Link to="/" >HOME</Link>
               <Link to="/aboutus">ABOUT US</Link>
               <Link to="/exploreyourneed">EXPLORE YOUR NEED</Link>
               <Link to="/Forum">FORUM</Link>
               <Link to="/Blog">BLOG</Link>
               <Link className="active" to="/Login">LOGIN</Link>
              </div>
             </div>
                <Routes/>
            </div>
        )     
    }
}
