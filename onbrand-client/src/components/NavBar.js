import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

import onbrand2b from '../onbrand2b.png';

function NavBar() {
    const { logout } = useContext(AuthContext)

    return(
        <div>
            <Navbar color="dark" expand='md'>
                <NavbarBrand href='/home'><img src={onbrand2b} alt="on brand" className="onbrandlogo" /></NavbarBrand>
                <Nav className='mr-auto' navbar>
                    {/* <NavItem>
                        <NavLink href='/blog'>Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/faqs'>FAQs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/about'>About</NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink href='/login'>Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/signup'><Button outline color='secondary'>Signup</Button></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/' onClick={logout}>Logout</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;