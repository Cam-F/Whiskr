import React from "react";
import "./Footer.css";

const Footer = props =>
    <footer>
        <div class="footer" id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <ul class="social">
                            <li> <a href="#"> <i class="fa fa-facebook">   </i> </a> </li>
                            <li> <a href="#"> <i class="fa fa-twitter">   </i> </a> </li>
                            <li> <a href="#"> <i class="fa fa-instagram">   </i> </a> </li>
                            <li> <a href="#"> <i class="fa fa-github">   </i> </a> </li>
                            <li> <a href="#"> <i class="fa fa-linkedin">   </i> </a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>;

export default Footer;