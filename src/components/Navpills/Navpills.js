import React from 'react';
import './Navpills.css';

const Navpills = props => (
    <div>
        <header role="banner">
            <nav id="navbar-primary">
                <p id="logo-main">WHISKR</p>
                <div class="navbar-header">
                    <a href="/" class="fourth before after">About</a>
                    <a href="/discover" class="sixth before after">Discover</a>
                    <a href="/" class="fifth before after">Local</a>
                </div>
            </nav>
        </header>
    </div >
);
export default Navpills;