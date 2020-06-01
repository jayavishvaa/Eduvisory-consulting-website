import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    const renderSubMenu = () => props.subMenu.map((item, i) => <li key={i}><Link to={item.href}>{item.name}</Link></li>);
    return(
        <div className="nav-item">
           
            
                <Link to={props.navLink}>{props.navName}</Link>
                {props.subMenu ? (typeof props.subMenu=="object" ? <ul>{renderSubMenu()}</ul> : null) : null}
               
             
        </div>
    )
}