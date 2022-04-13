import { Component } from "react";
import './Footer.css'

const Footer = () => {

const	getYear = () => {
    return new Date().getFullYear();
}

		return(
			<footer className="footer">
      	<p className="footer-text">Copyright {getYear()} Argent Bank</p>
    	</footer>
		)
	
}

export default Footer;