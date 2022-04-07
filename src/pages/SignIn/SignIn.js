import { Component } from "react";
import SignInConnect from "../../components/SignInConnect/SignInConnect";

class SignIn extends Component {
	render(){
		return(
			<main className="main bg-dark">
				<SignInConnect />
			</main >
		)
	}
}

export default SignIn;