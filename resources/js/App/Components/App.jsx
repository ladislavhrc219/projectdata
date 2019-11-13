import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Register from './Auth/Register.jsx';
import Login from './Auth/Login.jsx';

import Navigation from './Navigation.jsx';
import Charities from './Charities.jsx';
import Store from './Store.jsx';
import Strap from './Strap.jsx';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          token: null,
          logged_in: null
      }

    }

    render() {
        return (

            <Switch>
                <Route exact path="/" render={() =>
                <>
                <Navigation />
                 <h1>E-SHOP</h1>
                 {/* <Link to="/register/">Registrar</Link>
                 <Link to="/strap/">MDstrap</Link>
                 <Link to="/login/">Login link </Link>
                 <Link to="/navigation">Navigation</Link>

                 <Link to="/charities">Charities</Link> */}
                 {/* <Link to="/store">Store</Link> */}
                </>
              }></Route>

              <Route exact path="/strap" render={() => <Strap/>}></Route>

              <Route exact path="/register" render={() => <Register/>}></Route>
              <Route exact path="/login" render={() => <Login/>}></Route>
              <Route exact path="/navigation" render={() => <Navigation/>}></Route>
              <Route exact path="/navi" render={() => <Navi/>}> nah</Route>
              <Route exact path="/charity" render={() => <Charities/>}>
              </Route>
              <Route exact path="/store" render={() => <Store/>}></Route>
            </Switch>
        )
    }
}
