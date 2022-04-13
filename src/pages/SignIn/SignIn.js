import { Component } from "react";
import SignInConnect from "../../components/SignInForm/SignInForm";

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