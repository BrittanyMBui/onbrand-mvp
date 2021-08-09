import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

import onbrand2b from '../onbrand2b.png';

function NavBar() {
    const { logout, user } = useContext(AuthContext)

    return(
        <div>
            <Navbar color="dark" expand='md'>
                <NavbarBrand href='/'><img src={onbrand2b} alt="on brand" className="onbrandlogo" /></NavbarBrand>
                <Nav className='mr-auto' navbar>
                    <NavItem style={{display: !user ? 'block' : 'none'}}>
                        <NavLink href='/login'>Login</NavLink>
                    </NavItem>
                    <NavItem style={{display: user ? 'block' : 'none'}}>
                        <NavLink href='/' onClick={logout}>Logout</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;