import React from 'react';
import './Navpills.css';

const Navpills = props => (
    <div>
        <header role="banner">
            <img id="logo-main" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png" width="200" alt="Logo Thing main logo" />
            <nav id="navbar-primary">
                <div class="navbar-header">
                    <a href="/" class="fourth before after">About</a>
                    <a href="/discover" class="sixth before after">Discover</a>
                    <a href="/local" class="fifth before after">Local</a>
                </div>
            </nav>
        </header>
    </div >
);
export default Navpills;