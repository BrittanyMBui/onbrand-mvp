import React, { useContext, useState } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { AuthContext } from '../../context/auth';

import onbrand2b from '../../onbrand2b.png';
import Search from '../Search';
import './NavBar.styles.scss';

function NavBar() {
  const { logout, user } = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand='lg' className='color-nav' variant='dark' fixed='top'>
        <NavbarBrand onClick={Navbar.Toggle} href='/'>
          <img src={onbrand2b} alt="on brand" className="onbrandlogo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem style={{ display: !user ? 'block' : 'none' }}>
              <NavLink href='/login'>Login</NavLink>
            </NavItem>
            <NavItem style={{ display: user ? 'block' : 'none' }}>
              <NavLink href='/' onClick={logout}>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavItem>
          <Search />
        </NavItem>
      </Navbar>
    </div>
  )
}

export default NavBar;