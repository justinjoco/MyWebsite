import React from "react";
import {Navbar, Nav, NavItem, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from './assets/transparent_logo.png';


const CustomNavbar = (props) =>{
	const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>
	return (
		<Navbar bg="secondary" expand="sm" sticky="top" variant="dark">
		  <Navbar.Brand href="#"><img src={logo} alt="Logo"/></Navbar.Brand>
			<Navbar.Collapse>
				<Nav className="mr-auto">
					</Nav>
					<Nav>
					<Nav.Item>
						<Nav.Link href="/#"><B>Home</B></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#about"><B>About</B></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#projects"><B>Projects</B></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#experiences"><B>Experiences</B></Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="https://github.com/justinjoco"><B>Github</B></Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

	);
	
}

export default CustomNavbar;