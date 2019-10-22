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

                    <a role="button" className={"navbar-burger burger" + menuActive} onClick={this.handleClick} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={"navbar-menu" + menuActive} >
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">Dashboard</Link>

                        <Link to="/track" className="navbar-item">Track</Link>

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
                            <a className="button is-primary">
                                <strong>Sign in</strong>
                            </a>
                        </div>
                    </div>

                </div>

            </nav >

            // <nav className="navbar" role="navigation" aria-label="main navigation">
            //     <div className="navbar-brand">
            //         <a className="navbar-item">Swift</a>
            //     </div>

            //     <span className={'navbar-toggle ' + menuActive} onClick={this.handleClick}>
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //     </span>

            //     <div className={'navbar-right navbar-menu ' + menuActive}>

            //         <Link to="/" className="navbar-item r-item">Home</Link>
            //         <Link to="/faq" className="navbar-item r-item">Features</Link>
            //         <Link to="/faq" className="navbar-item r-item">About</Link>
            //         <Link to="/faq" className="navbar-item r-item">FAQ</Link>

            //         <div className="navbar-item">
            //             <p className="control">
            //                 <a className="button is-primary is-outlined">
            //                     <span className="icon">
            //                         <i className="fa fa-download"></i>
            //                     </span>
            //                     <span>Join Now</span>
            //                 </a>
            //             </p>
            //         </div>

            //     </div>

            // </nav>
        );
    }
}

export default Header;
