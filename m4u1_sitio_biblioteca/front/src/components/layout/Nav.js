import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
        <Nav>
          <div>
            <ul>
                <li><link to="/">Home</link></li>
                <li><link to="/nosotros">Nosotros</link></li>
                <li><link to="/novedades">Novedades</link></li>
                <li><link to="/contacto">Contacto</link></li>
            </ul>
            </div>    
        </Nav>
      
    );
}

export default Nav;