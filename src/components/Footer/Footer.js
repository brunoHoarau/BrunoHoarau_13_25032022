import { Component } from "react";
import './Footer.css'

class Footer extends Component {

	getYear() {
    return new Date().getFullYear();
}

	render(){
		return(
			<footer className="footer">
      	<p className="footer-text">Copyright {this.getYear()} Argent Bank</p>
    	</footer>
		)
	}
}

export default Footer;