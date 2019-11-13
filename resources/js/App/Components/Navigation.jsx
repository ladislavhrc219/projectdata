import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { Link } from 'react-router-dom';


const links = [
  { href: '/home', text: 'Home' },
  { href: '/charity', text: 'Charity' },
  { href: '/strap', text: 'DBStrap' },
  { href: '/card', text: 'Product' },
  { href: '#about', text: 'About' },
  { href: '#cata', text: 'Categories' },
  { href: '#test', text: 'Blogs' },
  { href: '/register', text: 'Register' },
//   { href: '#busns', text: 'Adds', className: 'btnadd' },
  { href: '/login', text: 'LOGIN' },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <Link to={href} className="nav-link">{text}</Link>
  </NavItem>
);

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">E-shop</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// import React from 'react';
// import { Fragment } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import { Alert} from 'reactstrap';
// ​
// export default class App extends React.Component {
// ​
//   constructor(props) {
//     super(props);
// ​
//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
// ​
//   render() {
//     return <Alert color="danger">
//       <Fragment>

//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">E-Market</NavbarBrand>

//         <NavbarToggler onClick={this.toggle} />
//         <Collapse isOpen={this.state.isOpen} navbar>
//           <Nav className="ml-auto" navbar>

//           <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Shop
//                 </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Furniture
//                   </DropdownItem>
//                 <DropdownItem>
//                   Clothing
//                   </DropdownItem>
//                 <DropdownItem>
//                   Souvenirs
//                 </DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>
//                   Reset
//                   </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//             <NavItem>
//               <NavLink href="/sell_on/">Sell On</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink>
//                 <Link to="/register/">Register</Link>
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink>
//                 <Link to="/login/">Log In</Link>
//               </NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>

//       </Navbar>
//       </Fragment>
//     </Alert>
//   }
// }




