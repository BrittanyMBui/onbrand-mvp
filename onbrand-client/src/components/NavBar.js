import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Button } from 'reactstrap';
import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

function NavBar() {
    const { logout } = useContext(AuthContext)

    return(

        <div>
            <Navbar color='light' expand='md'>
                <NavbarBrand href='/'>On Brand</NavbarBrand>
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <NavLink href='/blog'>Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/faqs'>FAQs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/about'>About</NavLink>
                    </NavItem>
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