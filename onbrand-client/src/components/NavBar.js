import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

function NavBar() {

    return(
        <div>
            <Navbar color='light' expand='md'>
                <NavbarBrand href='/'>On Brand</NavbarBrand>
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <NavLink href='/about'>About</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;