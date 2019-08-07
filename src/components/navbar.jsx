import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';

class Navbar  extends Component {

    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="badge badge-light" href = "#">Home<FontAwesomeIcon icon={faHome} /></a>
                 <span className="badge badge-pill badge-secondary m-2">
                 <FontAwesomeIcon icon={faShoppingCart} />
                 {this.props.totalCounters}</span>
            </nav>
         );
    }
}
 
export default Navbar ;