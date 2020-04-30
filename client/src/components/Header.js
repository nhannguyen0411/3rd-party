import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
    render() {
        return (
            <nav>
                <div className="nav-wrapper deep-purple lighten-1">
                    <a href="/" alt='Error' className="brand-logo">Store</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="/auth/google">Sign up</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/auth/logout">Log out</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}