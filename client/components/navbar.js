import {Navbar,NavItem, MenuItem, Nav, NavDropdown} from 'react-bootstrap';
import React, { Component } from 'react';


class Navigation extends Component{

    render(){
        return(
            

                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem >Link</NavItem>
                        <NavItem >Link</NavItem>
                        <NavDropdown  title="Dropdown"  id = 'MainDropDown'>
                            <MenuItem >Action</MenuItem>
                            <MenuItem >Another action</MenuItem>
                            <MenuItem >Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem >Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
        );
    }
    
}

export default Navigation;





