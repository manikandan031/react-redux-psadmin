import React from 'react';
import { Link } from 'react-router';

export const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Plural Sight</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/courses" activeClassName="active">Courses</Link></li>
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                </ul>
            </div>
        </nav>
    );
};