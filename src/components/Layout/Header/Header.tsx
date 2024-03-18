import React from 'react';
import { Navbar, Nav, Container, NavDropdown, NavbarBrand } from 'react-bootstrap';
import styles from './Header.module.css';
import icon from "../../../assets/images/Uniliver Logo.svg"

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className='px-4 py-3 sticky-top'>
        <NavbarBrand href="#">
          {/* Replace with your logo image or component */}
          <img src={icon} alt="C&RM" className={`${styles.logo}`} />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Profile Dropdown */}
            <NavDropdown title={'Austin'} className="profile-dropdown">
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
              {/* Add more dropdown options as needed */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
};

export default Header;
