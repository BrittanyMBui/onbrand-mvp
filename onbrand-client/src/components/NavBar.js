import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

function NavBar() {

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
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;