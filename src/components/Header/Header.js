import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        let menuActive = this.state.isToggleOn ? 'is-active' : '';
        return (
            <nav className="navbar is-dark " role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">Swift</Link>
                    <Link role="button" className={"navbar-burger burger" + menuActive} onClick={this.handleClick} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>
                <div id="navbarBasicExample" className={"navbar-menu" + menuActive} >
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">Dashboard</Link>
                        <Link to="/order" className="navbar-item">Orders</Link>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link to="/" className="navbar-link">Account</Link>
                            <div className="navbar-dropdown">
                                <Link to="/" className="navbar-item">Profile</Link>
                                <Link to="/" className="navbar-item">Settings</Link>
                                <Link to="/" className="navbar-item">Privacy</Link>
                                <Link to="/" className="navbar-item">Help</Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/" className="button is-primary"><strong>Sign in</strong></Link>
                        </div>
                    </div>
                </div>
            </nav >
        );
    }
}

export default Header;
